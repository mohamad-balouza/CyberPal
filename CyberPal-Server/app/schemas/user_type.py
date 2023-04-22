from pydantic import BaseModel
from typing import Optional, List, TYPE_CHECKING, ForwardRef

if TYPE_CHECKING:
    from app.schemas.user import User

class UserTypeBase(BaseModel):
    type: str

class UserTypeCreate(UserTypeBase):
    pass

class UserTypeUpdate(UserTypeBase):
    pass

class UserTypeInDBBase(UserTypeBase):
    id: int | None = None

    class Config:
        orm_mode = True

class UserType(UserTypeInDBBase):
    # users_of_type: Optional[List["User"]]
    pass

class UserTypeInDB(UserTypeInDBBase):
    pass
