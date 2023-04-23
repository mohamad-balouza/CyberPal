from app.crud.base import CrudBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import getPasswordHash
from sqlalchemy.orm import joinedload, Session
from typing import List

class CrudUser(CrudBase[User, UserCreate, UserUpdate]):
    
    def isActive(self, user: User) -> bool:
        return user.is_active
    
    def isAdmin(self, user: User) -> bool:
        if user.user_type == 1:
            return True
        return False
    
    def create(self, db: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(
            email=obj_in.email,
            hashed_password=getPasswordHash(obj_in.password),
            username=obj_in.username,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


user = CrudUser(User)