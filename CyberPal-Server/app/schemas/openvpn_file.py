from pydantic import BaseModel, FilePath
from typing import Optional
from app.schemas.user import User

class OpenvpnFileBase(BaseModel):
    file_url: FilePath
    user_id: int

class OpenvpnFileCreate(OpenvpnFileBase):
    pass

class OpenvpnFileUpdate(OpenvpnFileBase):
    pass

class OpenvpnFileInDBBase(OpenvpnFileBase):
    id: int | None = None

    class Config:
        orm_mode = True

class OpenvpnFile(OpenvpnFileInDBBase):
    user_that_uploaded: Optional[User]

class OpenvpnFileInDB(OpenvpnFileInDBBase):
    pass
