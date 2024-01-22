import axios from 'axios';
import { customHistory } from '~/components/CustomBrowserRouter';

const request = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});
request.interceptors.response.use(
    (response) => response,
    async (err) => {
        if (err.response.status === 401) {
            console.log('failed');
            customHistory.push('/login');
            return Promise.reject(err);
        }
    },
);
export default request;
