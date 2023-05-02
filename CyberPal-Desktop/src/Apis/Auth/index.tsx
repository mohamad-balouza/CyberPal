import axios from "axios";

export function login(data: string) {
    return axios.post(
        "http://127.0.0.1:8000/api/v1/login/access-token",
        data
    ).then(
        res => res.data
    )
}

export function signup(data: string){
    return axios.post(
        "http://127.0.0.1:8000/api/v1/users",
        data
    ).then(
        res => {
            console.log(res);
            console.log(res.data);
        }
    ).catch(
        err => console.error(err)
    );
}