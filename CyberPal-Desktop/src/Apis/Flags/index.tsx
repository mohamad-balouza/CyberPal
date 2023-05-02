import axios from "axios";

export function createFlag(data: string, token: string, token_type: string){
    return axios.post(
        "http://127.0.0.1:8000/api/v1/flags",
        data,
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

export function getFlagsByToolId(tool_id: number){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/flags/?tool_id=${tool_id}`,
        {
            headers: {
                'content-type': 'application/json',
            },
        }
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}