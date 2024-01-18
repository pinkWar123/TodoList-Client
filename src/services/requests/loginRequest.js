import axios from 'axios';

export const authenticateLocalUser = async (credentials) => {
    try {
        const { username, password } = credentials;
        const response = await axios.post('http://localhost:3001/login', {
            username,
            password,
        });
        return response.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
