import axios from "axios";

export function getAllScripts(token: string, token_type: string){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/scripts`,
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

export function createScript(data: string, token: string, token_type: string){
    return axios.post(
        `http://127.0.0.1:8000/api/v1/scripts`,
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

export function getAllFavoriteScripts(token: string, token_type: string){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/scripts/getfav`,
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

export function favoriteScript(data: string, token: string, token_type: string){
    return axios.post(
        `http://127.0.0.1:8000/api/v1/scripts/favorite`,
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

export function unfavoriteScript(script_favorited_id : number, token: string, token_type: string){
    return axios.delete(
        `http://127.0.0.1:8000/api/v1/scripts/unfavorite?script_favorited_id=${script_favorited_id}`,
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

export function getScript(script_id : number, token: string, token_type: string){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/scripts/${script_id}`,
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

export function updateScript(script_id : number,data: string, token: string, token_type: string){
    return axios.put(
        `http://127.0.0.1:8000/api/v1/scripts/${script_id}`,
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