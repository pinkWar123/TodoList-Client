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
            const refreshToken = localStorage.getItem('refresh_token');
            try {
                const response = await request.post('/login/refresh', {
                    refreshToken,
                });
                if (!response) {
                    customHistory.push('/login');
                    return;
                }
                localStorage.setItem('refresh_token', response.data.refreshToken);
                localStorage.setItem('access_token', response.data.token);
            } catch (err) {
                customHistory.push('/login');
                return Promise.reject(err);
            }
        }
    },
);
export default request;
