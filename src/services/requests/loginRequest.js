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

export const authenticateFacebookUser = async () => {
    try {
        const response = await request.get('/login/facebook/success');
        return response;
    } catch (e) {
        console.log(e);
        return null;
    }
};
