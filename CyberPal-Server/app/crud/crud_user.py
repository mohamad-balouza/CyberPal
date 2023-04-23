from app.crud.base import CrudBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from sqlalchemy.orm import joinedload, Session
from typing import List

class CrudUser(CrudBase[User, UserCreate, UserUpdate]):
    
    def isActive(self, user: User) -> bool:
        return user.is_active
    
    def isAdmin(self, user: User) -> bool:
        if user.user_type == 1:
            return True
        return False


user = CrudUser(User)