from app.crud.base import CrudBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from app.core.security import getPasswordHash, verifyPassword
from sqlalchemy.orm import joinedload, Session
from typing import List, Type, Dict, Any, Optional

class CrudUser(CrudBase[User, UserCreate, UserUpdate]):
    
    def isActive(self, user: User) -> bool:
        return user.is_active
    
    def isAdmin(self, user: User) -> bool:
        if user.user_type_id == 1:
            return True
        return False
    
    def create(self, db: Session, obj_in: UserCreate) -> User:
        db_obj = User(
            email=obj_in.email,
            hashed_password=getPasswordHash(obj_in.password),
            username=obj_in.username,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def getByEmail(self, db: Session, email: str) -> User:
        return db.query(User).filter(User.email == email).first()
    
    def update(self, db: Session, db_obj: User, obj_in: Type[UserUpdate] | Dict[str, Any]) -> User:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)

        if update_data["password"]:
            hashed_password = getPasswordHash(update_data["password"])
            del update_data["password"]
            update_data["hashed_password"] = hashed_password

        return super().update(db, db_obj=db_obj, obj_in=update_data)
    
    def authenticate(self, db: Session, email: str, password: str) -> Optional[User]:
        user = self.getByEmail(db, email=email)
        if not user:
            return None
        if not verifyPassword(password, user.hashed_password):
            return None
        return user


user = CrudUser(User)