import config_mail 
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic_settings import BaseSettings
from pydantic import EmailStr
from typing import List


# ✅ Configurações de e-mail via variáveis de ambiente
class Settings(BaseSettings):
    MAIL_USERNAME: str
    MAIL_PASSWORD: str
    MAIL_FROM: EmailStr
    MAIL_PORT: int
    MAIL_SERVER: str
    MAIL_FROM_NAME: str = "Ponto Criativo"
    MAIL_STARTTLS: bool = True
    MAIL_SSL_TLS: bool = False
    USE_CREDENTIALS: bool = True

    class Config:
        env_file = ".env"  # opcional, se estiver usando .env localmente


settings = Settings()

# ✅ Configuração da conexão com o servidor SMTP (Mailtrap)
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


# 📩 Função para enviar notificação ao receber contato
async def send_contact_notification(name: str, email: str, phone: str, company: str, message: str):
    subject = f"📬 Novo contato no site - {name}"

    # Corpo do e-mail (HTML)
    html_body = f"""
    <h2>Novo contato recebido no site</h2>
    <p><strong>Nome:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Telefone:</strong> {phone}</p>
    <p><strong>Empresa:</strong> {company}</p>
    <p><strong>Mensagem:</strong> {message}</p>
    """

    msg = MessageSchema(
        subject=subject,
        recipients=[settings.MAIL_FROM],  # envia para seu próprio e-mail
        body=html_body,
        subtype="html",
    )

    fm = FastMail(conf)
    await fm.send_message(msg)
    print(f"📧 Email de notificação enviado com sucesso para {settings.MAIL_FROM}")

