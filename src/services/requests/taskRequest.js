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

const getCompletedTasks = async ({ page, pageSize }) => {
    try {
        const response = await request.get(endpoint + '/completed', {
            params: { page, pageSize },
        });
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getCompletedTasksNumDates = async () => {
    try {
        const response = await request.get(endpoint + '/completed/maxPage');
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getUpcomingTasks = async ({ page, pageSize }) => {
    try {
        const response = await request.get(endpoint + '/upcoming');
        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getUpcomingTasksNumDates = async () => {
    try {
        const response = await request.get(endpoint + '/upcoming/maxPage');
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
            completedAt: null,
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

const completeTask = async ({ _id }) => {
    try {
        const response = await request.put(endpoint + '/completed', {
            _id,
        });
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

export {
    getAllTasks,
    getTodayTasks,
    getOverdueTasks,
    getCompletedTasks,
    getCompletedTasksNumDates,
    getUpcomingTasks,
    getUpcomingTasksNumDates,
    createNewTask,
    updateTask,
    completeTask,
    removeTask,
};
