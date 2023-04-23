from pydantic import BaseModel, FilePath
from typing import Optional

class OpenvpnFileBase(BaseModel):
    file_url: FilePath | None = None
    user_id: int | None = None

class OpenvpnFileCreate(OpenvpnFileBase):
    pass

class OpenvpnFileUpdate(OpenvpnFileBase):
    pass

class OpenvpnFileInDBBase(OpenvpnFileBase):
    id: int | None = None

    class Config:
        orm_mode = True

class OpenvpnFile(OpenvpnFileInDBBase):
    user_that_uploaded: Optional["UserInDBBase"]

class OpenvpnFileInDB(OpenvpnFileInDBBase):
    pass

from app.schemas.user import UserInDBBase
OpenvpnFile.update_forward_refs()