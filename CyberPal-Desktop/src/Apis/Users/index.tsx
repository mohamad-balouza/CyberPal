import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";


export function getCurrentUser(token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        "/users/me",
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function getAllUsers(){
    return defaultAxios.get(
        "/users",
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function updateUser(user_id: number, data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.put(
        `/users/${user_id}`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function deleteUser(user_id:number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.delete(
        `/users/${user_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}