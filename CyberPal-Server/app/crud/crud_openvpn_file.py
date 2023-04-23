from app.crud.base import CrudBase
from app.models.openvpn_file import OpenvpnFile
from app.schemas.openvpn_file import OpenvpnFileCreate, OpenvpnFileUpdate

class CrudOpenvpnFile(CrudBase[OpenvpnFile, OpenvpnFileCreate, OpenvpnFileUpdate]):
    pass


openvpn_file = CrudOpenvpnFile(OpenvpnFile)