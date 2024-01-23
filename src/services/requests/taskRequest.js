import request from './request';

const getAllTasks = async () => {
    try {
        const response = await request.get('/task');
        console.log(response);
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
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export { getAllTasks, createNewTask };
