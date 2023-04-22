from pydantic import BaseModel
from typing import Optional, TYPE_CHECKING

if TYPE_CHECKING:
    from app.schemas.user import User
    from app.schemas.script import Script


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
    user_who_favorited: Optional["User"]
    script_favorited: Optional["Script"]

class FavoriteScriptInDB(FavoriteScriptInDBBase):
    pass
