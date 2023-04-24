from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from app.database.database import Base


class FavoriteScript(Base):
    __tablename__ = "favorite_scripts"

    script_favorited_id = Column(Integer, ForeignKey("scripts.id"), primary_key=True)
    user_who_favorited_id = Column(Integer, ForeignKey("users.id"), primary_key=True)

    user_who_favorited = relationship("User", back_populates="favorited_scripts")
    favorited_script = relationship("Script", back_populates="user_who_favorited")