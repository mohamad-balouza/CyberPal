from app.crud.base import CrudBase
from app.models.script import Script
from app.schemas.script import ScriptCreate, ScriptUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudScript(CrudBase[Script, ScriptCreate, ScriptUpdate]):
    def createWithAuthor(self, db: Session, *, obj_in: ScriptCreate, author_id: int) -> Script:
        obj_in_data = jsonable_encoder(obj_in)
        obj_in_data.pop('author_id', None)
        db_obj = self.model(**obj_in_data, author_id=author_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def getMultipleByAuthor(self, db: Session, *, author_id: int, skip: int = 0, limit: int = 100) -> List[Script]:
        return db.query(self.model).filter(Script.author_id == author_id).offset(skip).limit(limit).all()


script = CrudScript(Script)