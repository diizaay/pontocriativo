from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import load_dotenv
import os
import logging

logger = logging.getLogger(__name__)
load_dotenv()

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT")),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_FROM_NAME=os.getenv("MAIL_FROM_NAME"),
    MAIL_STARTTLS=os.getenv("MAIL_STARTTLS") == "True",
    MAIL_SSL_TLS=os.getenv("MAIL_SSL_TLS") == "True",
    USE_CREDENTIALS=True,
)

async def send_contact_notification(contact_data: dict):
    logger.info("📧 [DEBUG] Entrou em send_contact_notification")
    logger.info(f"📧 Enviando e-mail para: {os.getenv('ADMIN_NOTIFICATION_EMAIL')}")
    try:
        subject = f"📩 Novo contato de {contact_data['name']}"
        recipients = [os.getenv("ADMIN_NOTIFICATION_EMAIL")]

        body = f"""
        📬 Nova mensagem recebida pelo formulário de contato:

        Nome: {contact_data['name']}
        Email: {contact_data['email']}
        Telefone: {contact_data.get('phone', 'Não informado')}
        Empresa: {contact_data.get('company', 'Não informada')}
        Mensagem:
        {contact_data['message']}

        📅 Enviado automaticamente pelo sistema.
        """

        message = MessageSchema(
            subject=subject,
            recipients=recipients,
            body=body,
            subtype="plain"
        )

        fm = FastMail(conf)
        await fm.send_message(message)
        logger.info("✅ [DEBUG] E-mail enviado com sucesso.")
    except Exception as e:
        logger.error(f"❌ [DEBUG] Falha ao enviar e-mail: {e}")
