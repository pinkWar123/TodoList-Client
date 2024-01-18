import axios from 'axios';

const request = axios.create({
    baseURL: process.env.HOST,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default request;
