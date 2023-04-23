from sqlalchemy import Column, Integer, String, ForeignKey, Table

from app.database.database import Base

FavoriteScript = Table(
    'favorite_scripts',
    Base.metadata,
    Column('user_who_favorited_id', Integer, ForeignKey("users.id"), primary_key=True),
    Column('script_favorited_id', Integer, ForeignKey("scripts.id"), primary_key=True)
)