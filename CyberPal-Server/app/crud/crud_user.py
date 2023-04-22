from app.crud.base import CrudBase
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate
from sqlalchemy.orm import joinedload, Session
from typing import List

class CrudUser(CrudBase[User, UserCreate, UserUpdate]):
    def get_multiple(self, db: Session, offset: int = 0, limit: int = 100) ->List[User]:
        return db.query(self.model).offset(offset).limit(limit).all()



user = CrudUser(User)