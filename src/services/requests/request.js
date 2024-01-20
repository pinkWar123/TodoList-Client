import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default request;
