import axios from "axios";

export function createTool(data: string, token: string, token_type: string){
    return axios.post(
        "http://127.0.0.1:8000/api/v1/tools",
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

export function getAllTools(){
    return axios.get(
        "http://127.0.0.1:8000/api/v1/tools",
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

export function getTool(tool_id: number){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/tools/${tool_id}`,
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

export function updateTool(tool_id: number, data: string, token: string, token_type: string){
    return axios.put(
        `http://127.0.0.1:8000/api/v1/tools/${tool_id}`,
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

export function deleteTool(tool_id: number, token: string, token_type: string){
    return axios.delete(
        `http://127.0.0.1:8000/api/v1/tools/${tool_id}`,
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