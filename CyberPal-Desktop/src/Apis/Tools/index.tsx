import axios from "axios";

export function createTool(data: string){
    return axios.post(
        "http://127.0.0.1:8000/api/v1/tools",
        data,
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