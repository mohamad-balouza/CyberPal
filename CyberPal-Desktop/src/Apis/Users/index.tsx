import axios from "axios";


export function getCurrentUser(token: string, token_type: string){
    return axios.get(
        "http://127.0.0.1:8000/api/v1/users/me",
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

export function getAllUsers(){
    return axios.get(
        "http://127.0.0.1:8000/api/v1/users",
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

export function updateUser(user_id:number, data: string, token: string, token_type: string){
    return axios.put(
        `http://127.0.0.1:8000/api/v1/users/${user_id}`,
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

export function deleteUser(user_id:number, token: string, token_type: string){
    return axios.delete(
        `http://127.0.0.1:8000/api/v1/users/${user_id}`,
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