import request from './request';

const endpoint = '/task/priority';

export const getPriority = async ({ taskId }) => {
    try {
        const response = await request.get(endpoint, {
            params: { taskId },
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const postPriority = async ({ taskId, priority }) => {
    try {
        const response = await request.post(endpoint, {
            priority,
            taskId,
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};
