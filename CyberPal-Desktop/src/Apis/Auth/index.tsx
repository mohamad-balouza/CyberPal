import axios from "axios";
import env from "react-dotenv";

export function login() {
    return axios.post(
        "http://127.0.0.1:8000/api/v1/login/access-token",
    ).then(
        res => res.data
    )
}