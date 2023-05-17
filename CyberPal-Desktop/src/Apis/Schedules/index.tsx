import { defaultAxios, setAuthToken } from "Apis/AxiosConfig";

export function getAllSchedules(token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/schedules`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function createSchedule(data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.post(
        `/schedules`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function getSchedule(schedule_id : number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.get(
        `/schedules/${schedule_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function updateSchedule(schedule_id : number, data: string, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.put(
        `/schedules/${schedule_id}`,
        data,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}

export function deleteSchedule(schedule_id : number, token: string, token_type: string){
    setAuthToken(token, token_type);
    return defaultAxios.delete(
        `/schedules/${schedule_id}`,
    ).then(
        res => res.data
    ).catch(
        err => console.error(err)
    );
}