import request from './request';

export const getUserProfile = async () => {
    request.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    try {
        const data = await request.get('/');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
