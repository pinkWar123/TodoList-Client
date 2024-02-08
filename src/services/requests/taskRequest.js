import request from './request';

const endpoint = '/task';

const getAllTasks = async () => {
    try {
        const response = await request.get(endpoint);
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getTodayTasks = async () => {
    try {
        const response = await request.get(endpoint + '/today');
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getOverdueTasks = async () => {
    try {
        const response = await request.get(endpoint + '/overdue');
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const createNewTask = async ({ taskName, description, dueDate, priority }) => {
    try {
        const response = await request.post(endpoint, {
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
        const response = await request.put(endpoint, { _id, task });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const removeTask = async ({ _id }) => {
    try {
        const response = await request.delete(endpoint, {
            data: { _id },
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export { getAllTasks, getTodayTasks, getOverdueTasks, createNewTask, updateTask, removeTask };
