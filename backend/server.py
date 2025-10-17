import os
import logging
print("🚀 ESTE É O SERVER QUE ESTÁ SENDO EXECUTADO 🚀")

from pathlib import Path
from typing import List, Optional
from datetime import datetime

from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pymongo.errors import ServerSelectionTimeoutError

from models import Contact, ContactCreate, Project, Service
from database import contacts_collection, projects_collection, services_collection, close_db
from seed_data import projects_seed, services_seed
from email_service import send_contact_notification

# ==================== CONFIGURAÇÕES BÁSICAS ====================
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

app = FastAPI(title="Ponto Criativo API")
api_router = APIRouter(prefix="/api")

# Configuração de logs
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ==================== STARTUP & SHUTDOWN ====================
@app.on_event("startup")
async def startup_db():
    """Inicializa o banco e insere dados seed se necessário."""
    try:
        projects_count = await projects_collection.count_documents({})
        if projects_count == 0:
            await projects_collection.insert_many(projects_seed)
            logger.info(f"✅ Seeded {len(projects_seed)} projects")

        services_count = await services_collection.count_documents({})
        if services_count == 0:
            await services_collection.insert_many(services_seed)
            logger.info(f"✅ Seeded {len(services_seed)} services")

        logger.info("🚀 Database initialized successfully")
    except ServerSelectionTimeoutError as e:
        logger.error("❌ Could not connect to MongoDB during startup: %s", e)
    except Exception as e:
        logger.error(f"❌ Error seeding database: {e}")

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_db()

# ==================== ROTAS BÁSICAS ====================
@api_router.get("/")
async def root():
    return {
        "message": "Ponto Criativo API",
        "version": "1.0.0",
        "status": "online"
    }

# ==================== ENDPOINTS DE CONTATO ====================
@api_router.post("/contact")
async def submit_contact(contact_data: ContactCreate, request: Request):
    """Recebe mensagens do formulário de contato e envia notificação por e-mail."""
    try:
        logger.info("📥 Recebi uma nova requisição de contato")

        client_ip = request.client.host if request.client else None

        # cria o objeto de contato
        contact = Contact(
            **contact_data.dict(),
            ip_address=client_ip
        )

        # salva no banco
        result = await contacts_collection.insert_one(contact.dict())
        logger.info(f"💾 Contato salvo no banco: {contact.name} ({contact.email})")

        # envia notificação por e-mail
        logger.info("🚀 Chamando função de envio de e-mail...")
        await send_contact_notification(contact.dict())
        logger.info("✅ E-mail enviado com sucesso.")

        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "id": str(result.inserted_id)
        }

    except ServerSelectionTimeoutError as e:
        logger.error("❌ MongoDB indisponível ao enviar contato: %s", e)
        raise HTTPException(
            status_code=503,
            detail="Serviço de banco de dados indisponível no momento. Tente novamente mais tarde.",
        )
    except Exception as e:
        logger.error(f"❌ Erro ao enviar contato: {e}")
        raise HTTPException(status_code=500, detail="Erro ao enviar mensagem. Tente novamente.")

@api_router.get("/contacts", response_model=List[Contact])
async def get_all_contacts(skip: int = 0, limit: int = 100):
    """Lista todos os contatos (para painel/admin futuro)."""
    try:
        contacts = await contacts_collection.find().skip(skip).limit(limit).sort("created_at", -1).to_list(limit)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"❌ Erro ao buscar contatos: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar contatos.")

# ==================== ENDPOINTS DE PROJETOS ====================
@api_router.get("/projects", response_model=List[Project])
async def get_projects(category: Optional[str] = None):
    """Lista projetos, opcionalmente filtrados por categoria."""
    try:
        query = {}
        if category:
            query["category"] = category

        projects = await projects_collection.find(query).sort("order", 1).to_list(1000)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"❌ Erro ao buscar projetos: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar projetos.")

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Busca um único projeto pelo ID."""
    try:
        project = await projects_collection.find_one({"id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="Projeto não encontrado")
        return Project(**project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Erro ao buscar projeto: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar projeto.")

# ==================== ENDPOINTS DE SERVIÇOS ====================
@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Lista todos os serviços."""
    try:
        services = await services_collection.find().sort("order", 1).to_list(1000)
        return [Service(**service) for service in services]
    except Exception as e:
        logger.error(f"❌ Erro ao buscar serviços: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar serviços.")

@api_router.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: str):
    """Busca um único serviço pelo ID."""
    try:
        service = await services_collection.find_one({"id": service_id})
        if not service:
            raise HTTPException(status_code=404, detail="Serviço não encontrado")
        return Service(**service)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Erro ao buscar serviço: {e}")
        raise HTTPException(status_code=500, detail="Erro ao buscar serviço.")

# ==================== CONFIGURAÇÃO CORS ====================
# Inclui o roteador
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/teste")
def hello():
    print("👋 Hello World executou!")
    return {"msg": "Hello World"}
