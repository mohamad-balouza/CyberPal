from pydantic import BaseModel
from typing import Optional, List, TYPE_CHECKING

if TYPE_CHECKING:
    from app.schemas.user import User

class ScriptBase(BaseModel):
    script_title: str | None = None
    script_content: str | None = None
    author_id: int | None = None

class ScriptCreate(ScriptBase):
    script_title: str
    script_content: str
    author_id: int

class ScriptUpdate(ScriptBase):
    pass

class ScriptInDBBase(ScriptBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Script(ScriptInDBBase):
    author: Optional["User"]


class ScriptInDB(ScriptInDBBase):
    pass
