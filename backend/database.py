import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ.get('DB_NAME', 'ponto_criativo')

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Collections
contacts_collection = db.contacts
projects_collection = db.projects
services_collection = db.services

async def close_db():
    client.close()
