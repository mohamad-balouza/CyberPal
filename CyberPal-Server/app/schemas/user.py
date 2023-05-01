from pydantic import BaseModel, EmailStr
from typing import List, Optional


class UserBase(BaseModel):
    username: str
    email: EmailStr | None = None
    is_active: bool | None = True
    user_type_id: int = 2

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
    user_type: Optional["UserTypeInDBBase"]
    uploaded_file: Optional["OpenvpnFileInDBBase"]
    scripts: Optional[List["ScriptInDBBase"]]
    favorited_scripts: Optional[List["FavoriteScriptInDBBase"]]
    flags_used_by_user: Optional[List["UsedFlagInDBBase"]]
    schedules: Optional[List["ScheduleInDBBase"]]

class UserInDB(UserInDBBase):
    hashed_password: str


from app.schemas.user_type import UserTypeInDBBase
from app.schemas.openvpn_file import OpenvpnFileInDBBase
from app.schemas.script import ScriptInDBBase
from app.schemas.favorite_script import FavoriteScriptInDBBase
from app.schemas.used_flag import UsedFlagInDBBase
from app.schemas.schedule import ScheduleInDBBase
User.update_forward_refs()