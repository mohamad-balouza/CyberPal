import axios from "axios";
import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function login(data: URLSearchParams) {
    return axios.post(
        "http://127.0.0.1:8000/api/v1/login/access-token",
        data,
        {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }
    ).then(
        res => res.data
    )
}

export function createUser(data: string){
    return defaultAxios.post(
        "/users",
        data
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

// export function createUser(data: string){
//     return axios.post(
//         "http://127.0.0.1:8000/api/v1/users",
//         data,
//         {
//             headers: {
//                 'content-type': 'application/json',
//             },
//         }
//     ).then(
//         res => res.data
//     ).catch(
//         err => console.error(err)
//     );
// }