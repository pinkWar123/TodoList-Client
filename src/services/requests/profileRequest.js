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

export const getSocialUserProfile = async ({ socialId, username, provider }) => {
    request.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    try {
        const data = await request.post('/social', {
            socialId,
            username,
            provider,
        });
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

export const signUp = async ({ username, password, firstName, lastName }) => {
    try {
        const data = await request.post('/signup', { username, password, firstName, lastName });
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
};
