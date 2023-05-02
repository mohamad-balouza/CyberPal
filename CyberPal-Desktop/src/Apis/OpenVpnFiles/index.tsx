import axios from "axios";

export function getAllOpenVpnFiles(token: string, token_type: string){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/openvpn_files`,
        {
            headers: {
                'content-type': 'application/json',
                'Authorization': `${token_type} ${token}`,
            },
        }
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}