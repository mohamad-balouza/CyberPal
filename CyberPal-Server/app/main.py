from fastapi import FastAPI, Depends
from typing_extensions import Annotated
from app.core import config
from functools import lru_cache
from app.database.database import engine
from app.models import Base
from app.api.api_v1.api_routers import api_router

app = FastAPI()

# Creating the tables in the database
Base.metadata.create_all(bind=engine)

@lru_cache()
def get_settings():
    return config.Settings()

app.include_router(api_router, prefix=config.settings.API_V1_STR)

@app.get("/info")
async def info(settings: Annotated[config.Settings, Depends(get_settings)]):
    return {
        "app_name": settings.APP_NAME,
        "admin_email": settings.TEMP_EMAIL,
    }