import request from './request';

export const authenticateLocalUser = async (credentials) => {
    try {
        const { username, password } = credentials;
        const response = await request.post('/login', {
            username,
            password,
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const authenticateSocialUser = async ({ socialId, name, provider }) => {
    request.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    try {
        const response = await request.post('/login/social', {
            socialId,
            name,
            provider,
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};
