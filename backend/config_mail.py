# Força uso de pydantic-settings mesmo que a lib esteja importando errado
import sys
import pydantic_settings

# Cria um "alias" para que fastapi-mail ache BaseSettings
sys.modules["pydantic"].BaseSettings = pydantic_settings.BaseSettings
