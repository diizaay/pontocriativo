import os
import warnings
from pathlib import Path

from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

DEFAULT_MONGO_URL = "mongodb://localhost:27017"

mongo_url_env = os.environ.get("MONGO_URL", "").strip()
if not mongo_url_env:
    warnings.warn(
        f"[database] Variável de ambiente MONGO_URL não encontrada. "
        f"Utilizando valor padrão {DEFAULT_MONGO_URL}.",
        RuntimeWarning,
    )
mongo_url = mongo_url_env or DEFAULT_MONGO_URL

db_name = os.environ.get("DB_NAME", "ponto_criativo")

client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=5000)
db = client[db_name]

# Collections
contacts_collection = db.contacts
projects_collection = db.projects
services_collection = db.services


async def close_db():
    client.close()
