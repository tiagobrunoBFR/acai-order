import axios from 'axios';

const client = axios.create({
    baseURL: '/api/v1',
    withCredentials: false,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

export default client;