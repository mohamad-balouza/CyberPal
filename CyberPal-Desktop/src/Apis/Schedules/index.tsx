import axios from "axios";

export function getAllSchedules(token: string, token_type: string){
    return axios.get(
        `http://127.0.0.1:8000/api/v1/schedules`,
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

export function createSchedule(data: string, token: string, token_type: string){
    return axios.post(
        `http://127.0.0.1:8000/api/v1/schedules`,
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