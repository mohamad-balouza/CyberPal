from pydantic import BaseModel
from typing import Optional, List

class UserTypeBase(BaseModel):
    type: str | None = None

class UserTypeCreate(UserTypeBase):
    pass

class UserTypeUpdate(UserTypeBase):
    pass

class UserTypeInDBBase(UserTypeBase):
    id: int | None = None

    class Config:
        orm_mode = True

class UserType(UserTypeInDBBase):
    user: Optional[List["UserInDBBase"]]
    

class UserTypeInDB(UserTypeInDBBase):
    pass


from app.schemas.user import UserInDBBase
UserType.update_forward_refs()