from pydantic import BaseModel
from typing import Optional

class FavoriteScriptBase(BaseModel):
    user_who_favorited_id: int | None = None
    script_favorited_id: int | None = None

class FavoriteScriptCreate(FavoriteScriptBase):
    user_who_favorited_id: int
    script_favorited_id: int

class FavoriteScriptUpdate(FavoriteScriptBase):
    pass

class FavoriteScriptInDBBase(FavoriteScriptBase):
    class Config:
        orm_mode = True

class FavoriteScript(FavoriteScriptInDBBase):
    user_who_favorited: Optional["UserInDBBase"]
    favorited_script: Optional["ScriptInDBBase"]

class FavoriteScriptInDB(FavoriteScriptInDBBase):
    pass

from app.schemas.user import UserInDBBase
from app.schemas.script import ScriptInDBBase
FavoriteScript.update_forward_refs()