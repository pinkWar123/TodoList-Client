import { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(null);
    const [overdueTasks, setOverdueTasks] = useState(null);
    const [upcomingTasks, setUpcomingTasks] = useState(null);
    return (
        <TaskContext.Provider
            value={{ tasks, setTasks, overdueTasks, setOverdueTasks, upcomingTasks, setUpcomingTasks }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
