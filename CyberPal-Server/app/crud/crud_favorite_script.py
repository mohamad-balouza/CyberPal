from app.crud.base import CrudBase
from app.models.favorite_script import FavoriteScript
from app.schemas.favorite_script import FavoriteScriptCreate, FavoriteScriptUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudFavoriteScript(CrudBase[FavoriteScript, FavoriteScriptCreate, FavoriteScriptUpdate]):
    def createWithAuthor(self, db: Session, *, obj_in: FavoriteScriptCreate, user_who_favorited_id: int) -> FavoriteScript:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, user_who_favorited_id=user_who_favorited_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj
    
    def getMultipleByAuthor(self, db: Session, *, user_who_favorited_id: int, skip: int = 0, limit: int = 100) -> List[FavoriteScript]:
        return db.query(self.model).filter(FavoriteScript.user_who_favorited_id == user_who_favorited_id).offset(skip).limit(limit).all()

    def remove(self, db: Session, user_who_favorited_id: int, script_favorited_id: int) -> FavoriteScript:
        obj_to_delete = db.query(self.model).filter(FavoriteScript.user_who_favorited_id == user_who_favorited_id, FavoriteScript.script_favorited_id == script_favorited_id).first()
        db.delete(obj_to_delete)
        db.commit()
        return obj_to_delete



favorite_script = CrudFavoriteScript(FavoriteScript)