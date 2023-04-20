from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from app.database.database import Base


class Favorite_script(Base):
    __tablename__ = "favorite_scripts"

    user_who_favorited_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    script_favorited_id = Column(Integer, ForeignKey("scripts.id"), primary_key=True)