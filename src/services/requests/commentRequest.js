import request from './request';

export const postComments = async ({ content, taskId, authorName }) => {
    try {
        const response = await request.post('/comment', {
            content,
            taskId,
            authorName,
        });
        return response?.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getComments = async ({ taskId }) => {
    try {
        const response = await request.get('/comment', {
            params: { taskId },
        });
        return response?.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};
