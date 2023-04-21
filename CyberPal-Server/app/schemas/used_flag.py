from pydantic import BaseModel
from typing import Optional
from app.schemas import Flag, User

class UsedFlagBase(BaseModel):
    flag_contents: str | None = None
    flag_id: int | None = None
    user_id: int | None = None

class UsedFlagCreate(UsedFlagBase):
    flag_contents: str
    flag_id: int
    user_id: int

class UsedFlagUpdate(UsedFlagBase):
    pass

class UsedFlagInDBBase(UsedFlagBase):
    class Config:
        orm_mode = True
    

class UsedFlag(UsedFlagInDBBase):
    flag_used: Optional[Flag]
    user_who_used: Optional[User]

class UsedFlagInDB(UsedFlagInDBBase):
    pass
