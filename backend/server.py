from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from typing import List, Optional
from datetime import datetime

from models import Contact, ContactCreate, Project, Service
from database import db, contacts_collection, projects_collection, services_collection, close_db
from seed_data import projects_seed, services_seed

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Ponto Criativo API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ============= STARTUP & SEED =============

@app.on_event("startup")
async def startup_db():
    """Seed database with initial data if collections are empty"""
    try:
        # Seed projects if empty
        projects_count = await projects_collection.count_documents({})
        if projects_count == 0:
            await projects_collection.insert_many(projects_seed)
            logger.info(f"Seeded {len(projects_seed)} projects")
        
        # Seed services if empty
        services_count = await services_collection.count_documents({})
        if services_count == 0:
            await services_collection.insert_many(services_seed)
            logger.info(f"Seeded {len(services_seed)} services")
        
        logger.info("Database initialized successfully")
    except Exception as e:
        logger.error(f"Error seeding database: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_db()

# ============= ROUTES =============

@api_router.get("/")
async def root():
    return {
        "message": "Ponto Criativo API",
        "version": "1.0.0",
        "status": "online"
    }

# ============= CONTACT ENDPOINTS =============

@api_router.post("/contact")
async def submit_contact(contact_data: ContactCreate, request: Request):
    """Submit contact form"""
    try:
        # Get client IP
        client_ip = request.client.host if request.client else None
        
        # Create contact object
        contact = Contact(
            **contact_data.dict(),
            ip_address=client_ip
        )
        
        # Save to database
        result = await contacts_collection.insert_one(contact.dict())
        
        logger.info(f"New contact submission from {contact.name} ({contact.email})")
        
        # TODO: Send email notification (can be added later)
        # await send_email_notification(contact)
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Error submitting contact: {e}")
        raise HTTPException(status_code=500, detail="Erro ao enviar mensagem. Tente novamente.")

@api_router.get("/contacts", response_model=List[Contact])
async def get_all_contacts(skip: int = 0, limit: int = 100):
    """Get all contacts (admin only - future authentication)"""
    try:
        contacts = await contacts_collection.find().skip(skip).limit(limit).sort("created_at", -1).to_list(limit)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar contatos")

# ============= PROJECT ENDPOINTS =============

@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    """Get all projects, optionally filtered by category"""
    try:
        query = {}
        if category:
            query["category"] = category
        
        projects = await projects_collection.find(query).sort("order", 1).to_list(1000)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar projetos")

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a single project by ID"""
    try:
        project = await projects_collection.find_one({"id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="Projeto não encontrado")
        return Project(**project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar projeto")

# ============= SERVICE ENDPOINTS =============

@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Get all services"""
    try:
        services = await services_collection.find().sort("order", 1).to_list(1000)
        return [Service(**service) for service in services]
    except Exception as e:
        logger.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar serviços")

@api_router.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: str):
    """Get a single service by ID"""
    try:
        service = await services_collection.find_one({"id": service_id})
        if not service:
            raise HTTPException(status_code=404, detail="Serviço não encontrado")
        return Service(**service)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching service: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar serviço")

# Include the router in the main app
app.include_router(api_router)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
