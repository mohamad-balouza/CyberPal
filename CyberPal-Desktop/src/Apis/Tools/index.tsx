import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function createTool(data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.post(
        "/tools",
        data,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}

export function getAllTools(){
    return defaultAxios.get(
        "/tools",
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}

export function getTool(tool_id: number){
    return defaultAxios.get(
        `/tools/${tool_id}`,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}

export function updateTool(tool_id: number, data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.put(
        `/tools/${tool_id}`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}

export function deleteTool(tool_id: number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.delete(
        `/tools/${tool_id}`,
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    );
}