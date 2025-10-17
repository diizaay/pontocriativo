from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact Model
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    status: str = "novo"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None

# Project Model
class ProjectCreate(BaseModel):
    title: str
    category: str
    client: str
    description: str
    image: str
    tags: List[str]
    results: str
    featured: bool = False
    order: int = 0

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str
    client: str
    description: str
    image: str
    tags: List[str]
    results: str
    featured: bool = False
    order: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Service Model
class ServiceCreate(BaseModel):
    title: str
    description: str
    icon: str
    features: List[str]
    order: int = 0

class Service(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    icon: str
    features: List[str]
    order: int = 0
