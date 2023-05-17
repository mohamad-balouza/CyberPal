import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function getAllScripts(token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/scripts`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function createScript(data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.post(
        `/scripts`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function getAllFavoriteScripts(token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/scripts/getfav`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function favoriteScript(data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.post(
        `/scripts/favorite`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function unfavoriteScript(script_favorited_id : number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.delete(
        `/scripts/unfavorite?script_favorited_id=${script_favorited_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function getScript(script_id : number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/scripts/${script_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function updateScript(script_id : number, data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.put(
        `/scripts/${script_id}`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function deleteScript(script_id : number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.delete(
        `/scripts/${script_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}