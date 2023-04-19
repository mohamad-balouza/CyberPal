from pydantic import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str
    TEMP_EMAIL: str

    class Config:
        env_file = ".env"