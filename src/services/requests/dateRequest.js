import request from './request';

const endpoint = '/task/due';

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
