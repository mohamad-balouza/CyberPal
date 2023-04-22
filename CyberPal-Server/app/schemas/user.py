from pydantic import BaseModel, EmailStr
from typing import List, Optional, TYPE_CHECKING, ForwardRef

from app.schemas.user_type import UserType
# if TYPE_CHECKING:
    # from app.schemas.openvpn_file import OpenvpnFile
    # from app.schemas.script import Script
    # from app.schemas.favorite_script import FavoriteScript
    # from app.schemas.used_flag import UsedFlag
    # from app.schemas.schedule import Schedule


class UserBase(BaseModel):
    username: str
    email: EmailStr | None = None
    is_active: bool | None = True
    user_type_id: int = 1

class UserCreate(UserBase):
    email: EmailStr
    password: str

class UserUpdate(UserBase):
    password: str| None = None

class UserInDBBase(UserBase):
    id: int | None = None

    class Config:
        orm_mode = True

class User(UserInDBBase):
    user_type: Optional[UserType]
    # uploaded_file: Optional["OpenvpnFile"]
    # scripts: Optional[List["Script"]]
    # favorited_scripts: Optional[List["FavoriteScript"]]
    # flags_used_by_user: Optional[List["UsedFlag"]]
    # schedules: Optional[List["Schedule"]]

class UserInDB(UserInDBBase):
    hashed_password: str
