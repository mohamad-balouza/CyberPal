import axios from 'axios';

export const defaultAxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setAuthToken = (token: string, token_type: string) => {
    defaultAxios.defaults.headers.common['Authorization'] = `${token_type} ${token}`;
}