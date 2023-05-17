import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function getAllOpenVpnFiles(token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/openvpn_files`,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}