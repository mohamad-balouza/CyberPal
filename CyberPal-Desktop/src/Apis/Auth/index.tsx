import axios from "axios";

export function login() {
    return axios.post(
        "http://127.0.0.1:8000/api/v1/login/access-token",
    ).then(
        res => res.data
    )
}