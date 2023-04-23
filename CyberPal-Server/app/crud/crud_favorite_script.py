from app.crud.base import CrudBase
from app.models.favorite_script import FavoriteScript
from app.schemas.favorite_script import FavoriteScriptCreate, FavoriteScriptUpdate

class CrudFavoriteScript(CrudBase[FavoriteScript, FavoriteScriptCreate, FavoriteScriptUpdate]):
    pass


favorite_script = CrudFavoriteScript(FavoriteScript)