from typing import TypeVar, Generic, Type, Any, Optional, List, Dict
from pydantic import BaseModel
from app.database.database import Base
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)

class CrudBase(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: Type[ModelType]):
        self.model = model

    def getById(self, db: Session, id: Any) -> ModelType:
        return db.query(self.model).filter(self.model.id == id).first()
    
    def getMultiple(self, db: Session, skip: int = 0, limit: int = 100) ->List[ModelType]:
        return db.query(self.model).offset(skip).limit(limit).all()
    
    def create(self, db: Session, obj_in: Type[CreateSchemaType]) -> ModelType:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def update(self, db: Session, db_obj: ModelType, obj_in: Type[UpdateSchemaType] | Dict[str, Any]) -> ModelType:
        db_obj_data = jsonable_encoder(db_obj)
        if(isinstance(obj_in, dict)):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in db_obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def remove(self, db: Session, id: Any) -> ModelType:
        obj_to_delete = db.query(self.model).filter(self.model.id == id).first()
        db.delete(obj_to_delete)
        db.commit()
        return obj_to_delete