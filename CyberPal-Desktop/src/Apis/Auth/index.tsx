import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function login(data: URLSearchParams) {
    return defaultAxios.post(
        "/login/access-token",
        data,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    ).then(
        res => res.data
    ).catch(
        err => {
            console.error(err);
            throw err;
        }
    )
}

export function createUser(data: string){
    return defaultAxios.post(
        "/users",
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