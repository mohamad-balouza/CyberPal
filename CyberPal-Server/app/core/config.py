from pydantic import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str
    TEMP_EMAIL: str

    DB_TYPE: str
    DB_USERNAME: str
    DB_PASSWORD: str
    DB_NAME: str
    DB_SERVER: str

    class Config:
        env_file = ".env"