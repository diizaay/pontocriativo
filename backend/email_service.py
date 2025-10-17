from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic_settings import BaseSettings
from pydantic import EmailStr
from typing import List
import os
print("⚙️ Variáveis de ambiente carregadas:")
for key in ["MONGO_URL", "DB_NAME", "MAIL_FROM", "ADMIN_NOTIFICATION_EMAIL"]:
    print(f"{key} = {os.getenv(key)}")



# ✅ Modelo que inclui todas as variáveis do seu .env
class Settings(BaseSettings):
    # SMTP / E-mail
    MAIL_USERNAME: str
    MAIL_PASSWORD: str
    MAIL_FROM: EmailStr
    MAIL_PORT: int
    MAIL_SERVER: str
    MAIL_FROM_NAME: str = "Ponto Criativo"
    MAIL_STARTTLS: bool = True
    MAIL_SSL_TLS: bool = False
    USE_CREDENTIALS: bool = True

    # Banco de dados
    MONGO_URL: str
    DB_NAME: str

    # Notificação
    ADMIN_NOTIFICATION_EMAIL: EmailStr

    class Config:
        env_file = ".env"
        extra = "ignore"  # ignora variáveis extras não declaradas (por segurança)


# 🔐 Carrega as configurações
settings = Settings()

# 📬 Configuração do servidor de e-mail (Mailtrap)
conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD,
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_FROM_NAME=settings.MAIL_FROM_NAME,
    MAIL_STARTTLS=settings.MAIL_STARTTLS,
    MAIL_SSL_TLS=settings.MAIL_SSL_TLS,
    USE_CREDENTIALS=settings.USE_CREDENTIALS,
)


# 📩 Função para enviar notificação quando receber um contato
async def send_contact_notification(contact_data: dict):
    subject = f"📬 Novo contato no site - {contact_data.get('name')}"

    html_body = f"""
    <h2>📨 Novo contato recebido no site</h2>
    <p><strong>Nome:</strong> {contact_data.get('name')}</p>
    <p><strong>Email:</strong> {contact_data.get('email')}</p>
    <p><strong>Telefone:</strong> {contact_data.get('phone')}</p>
    <p><strong>Empresa:</strong> {contact_data.get('company')}</p>
    <p><strong>Mensagem:</strong> {contact_data.get('message')}</p>
    """

    msg = MessageSchema(
        subject=subject,
        recipients=[settings.ADMIN_NOTIFICATION_EMAIL],  # 👈 envia para você
        body=html_body,
        subtype="html",
    )

    fm = FastMail(conf)
    await fm.send_message(msg)
    print(f"📧 Email enviado com sucesso para {settings.ADMIN_NOTIFICATION_EMAIL}")

