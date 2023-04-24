from sqlalchemy import Column, Integer, String, ForeignKey, Table
from sqlalchemy.orm import relationship

from app.database.database import Base

# FavoriteScript = Table(
#     'favorite_scripts',
#     Base.metadata,
#     Column('user_who_favorited_id', Integer, ForeignKey("users.id"), primary_key=True),
#     Column('script_favorited_id', Integer, ForeignKey("scripts.id"), primary_key=True)
# )

class FavoriteScript(Base):
    __tablename__ = "favorite_scripts"

    script_favorited_id = Column(Integer, ForeignKey("scripts.id"), primary_key=True)
    user_who_favorited_id = Column(Integer, ForeignKey("users.id"), primary_key=True)

    user_who_favorited = relationship("User", back_populates="favorited_scripts")
    favorited_script = relationship("Script", back_populates="user_who_favorited")