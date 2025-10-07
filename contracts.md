# Contracts - Ponto Criativo Website

## 1. API Contracts

### Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso",
  "id": "string (MongoDB _id)"
}
```

### Get All Projects
**Endpoint:** `GET /api/projects`

**Query Params:**
- `category` (optional): Filter by category

**Response:**
```json
[
  {
    "_id": "string",
    "title": "string",
    "category": "string",
    "client": "string",
    "description": "string",
    "image": "string (URL)",
    "tags": ["string"],
    "results": "string",
    "created_at": "datetime"
  }
]
```

### Get All Services
**Endpoint:** `GET /api/services`

**Response:**
```json
[
  {
    "_id": "string",
    "title": "string",
    "description": "string",
    "icon": "string",
    "features": ["string"],
    "order": "number"
  }
]
```

### Newsletter Subscription (Future)
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "string (required)"
}
```

---

## 2. Mocked Data to Replace

Currently in `/app/frontend/src/data/mock.js`:

### Data to be replaced with backend APIs:
- ✅ **Projects**: Mock projects will be replaced with `GET /api/projects`
- ✅ **Services**: Mock services will be replaced with `GET /api/services`
- ✅ **Contact Form**: Currently shows toast only, will be replaced with `POST /api/contact`
- ⚠️ **About/Stats**: Will remain frontend-only (no backend needed)
- ⚠️ **Industries**: Will remain frontend-only (static data)
- ⚠️ **Testimonials**: Will remain frontend-only for MVP

---

## 3. Backend Implementation Plan

### Database Models (MongoDB)

#### Contact Model
```python
class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str
    status: str = "novo"  # novo, lido, respondido
    created_at: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None
```

#### Project Model
```python
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
```

#### Service Model
```python
class Service(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    icon: str
    features: List[str]
    order: int = 0
```

### Endpoints to Implement

1. **Contact Endpoints:**
   - `POST /api/contact` - Submit contact form
   - `GET /api/contact` - Get all contacts (admin only - future)

2. **Project Endpoints:**
   - `GET /api/projects` - Get all projects (with optional category filter)
   - `POST /api/projects` - Create project (admin only - future)
   - `PUT /api/projects/{id}` - Update project (admin only - future)
   - `DELETE /api/projects/{id}` - Delete project (admin only - future)

3. **Service Endpoints:**
   - `GET /api/services` - Get all services
   - `POST /api/services` - Create service (admin only - future)

### Additional Features:
- Email notification when contact form is submitted (using SMTP)
- Rate limiting on contact form to prevent spam
- Input validation and sanitization
- CORS properly configured

---

## 4. Frontend-Backend Integration

### Files to Update:

#### `/app/frontend/src/components/Contact.jsx`
**Change:** Replace mock submission with actual API call
```javascript
// BEFORE (Mock):
setTimeout(() => {
  toast({ title: 'Mensagem enviada com sucesso!' });
  setFormData({...});
  setIsSubmitting(false);
}, 1500);

// AFTER (Real API):
const response = await axios.post(`${API}/contact`, formData);
toast({ title: response.data.message });
setFormData({...});
setIsSubmitting(false);
```

#### `/app/frontend/src/components/Projects.jsx`
**Change:** Fetch projects from backend
```javascript
// BEFORE:
import { mockData } from '../data/mock';
const { projects } = mockData;

// AFTER:
const [projects, setProjects] = useState([]);
useEffect(() => {
  const fetchProjects = async () => {
    const response = await axios.get(`${API}/projects`);
    setProjects(response.data);
  };
  fetchProjects();
}, []);
```

#### `/app/frontend/src/components/Services.jsx`
**Change:** Fetch services from backend
```javascript
// BEFORE:
import { mockData } from '../data/mock';
const { services } = mockData;

// AFTER:
const [services, setServices] = useState([]);
useEffect(() => {
  const fetchServices = async () => {
    const response = await axios.get(`${API}/services`);
    setServices(response.data);
  };
  fetchServices();
}, []);
```

---

## 5. Implementation Steps

### Phase 1: Backend Setup ✅
1. Create MongoDB models for Contact, Project, Service
2. Implement POST /api/contact endpoint with email notification
3. Seed database with mock projects
4. Seed database with mock services
5. Implement GET /api/projects and GET /api/services

### Phase 2: Frontend Integration ✅
1. Create API utility file for axios calls
2. Update Contact.jsx to use real API
3. Update Projects.jsx to fetch from backend
4. Update Services.jsx to fetch from backend
5. Add loading states and error handling

### Phase 3: Testing ✅
1. Test contact form submission
2. Test projects listing and filtering
3. Test services listing
4. Verify email notifications
5. Test error scenarios

---

## 6. Environment Variables Needed

Backend `.env`:
```
MONGO_URL=<already configured>
DB_NAME=ponto_criativo
SMTP_HOST=smtp.gmail.com (for email notifications)
SMTP_PORT=587
SMTP_USER=<email>
SMTP_PASSWORD=<password>
ADMIN_EMAIL=contato@pontocriativo.com.br
```

---

## Notes:
- Admin panel for managing projects/services can be added in future iteration
- Email notifications for contact form submissions will use SMTP
- All dates stored in UTC
- Images will be stored as URLs (can integrate with cloud storage later)
