import request from './request';

const getAllTasks = async () => {
    try {
        const response = await request.get('/task');
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const createNewTask = async ({ taskName, description }) => {
    try {
        const response = await request.post('/task', {
            taskName,
            description,
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const removeTask = async ({ _id }) => {
    try {
        const response = await request.delete('/task', {
            data: { _id },
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export { getAllTasks, createNewTask, removeTask };
