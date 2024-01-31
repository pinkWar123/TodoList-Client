import request from './request';

const endpoint = '/comment';

export const postComments = async ({ content, taskId, authorName }) => {
    try {
        const response = await request.post(endpoint, {
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
        const response = await request.get(endpoint, {
            params: { taskId },
        });
        return response?.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const deleteComment = async ({ taskId, commentId }) => {
    try {
        const response = await request.delete(endpoint, {
            params: { taskId, commentId },
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const editComment = async ({ commentId, content }) => {
    try {
        const response = await request.put(endpoint, { commentId, content });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};
