from pydantic import BaseSettings
from typing import List


class Settings(BaseSettings):
    APP_NAME: str
    TEMP_EMAIL: str

    DB_TYPE: str
    DB_USERNAME: str
    DB_PASSWORD: str
    DB_NAME: str
    DB_SERVER: str

    API_V1_STR: str

    class Config:
        env_file = ".env"


settings = Settings()