import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function createFlag(data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.post(
        "/flags",
        data
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}

export function getFlagsByToolId(tool_id: number){
    return defaultAxios.get(
        `/flags/?tool_id=${tool_id}`,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}