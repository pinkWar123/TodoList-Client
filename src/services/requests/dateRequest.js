import request from './request';

const endpoint = '/task/due';

export const getDueDate = async ({ taskId }) => {
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

export const postDueDate = async ({ taskId, timestamp }) => {
    try {
        const response = await request.post(endpoint, {
            taskId,
            timestamp,
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const deleteDueDate = async ({ taskId }) => {
    try {
        const response = await request.delete(endpoint, { params: { taskId } });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};
