from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base
from app.models.favorite_script import Favorite_script



class Script(Base):
    __tablename__ = "scripts"

    id = Column(Integer, primary_key=True, index=True)
    script_title = Column(String, nullable=False)
    script_content = Column(String, nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"))

    author = relationship("User", back_populates="scripts")
    user_who_favorited = relationship("User", secondary=Favorite_script, back_populates="favorited_scripts")