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

const createNewTask = async ({ taskName, description, dueDate, priority }) => {
    try {
        const response = await request.post('/task', {
            taskName,
            description,
            dueDate,
            priority,
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const updateTask = async ({ _id, task }) => {
    try {
        const response = await request.put('/task', { _id, task });
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

export { getAllTasks, createNewTask, updateTask, removeTask };
