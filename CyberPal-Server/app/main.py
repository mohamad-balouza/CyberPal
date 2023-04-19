from fastapi import FastAPI, Depends
from typing_extensions import Annotated
from app.core import config
from functools import lru_cache
from app.database.database import engine
from app.models import user


app = FastAPI()

user.Base.metadata.create_all(bind=engine)

@lru_cache()
def get_settings():
    return config.Settings()


@app.get("/info")
async def info(settings: Annotated[config.Settings, Depends(get_settings)]):
    return {
        "app_name": settings.APP_NAME,
        "admin_email": settings.TEMP_EMAIL,
    }