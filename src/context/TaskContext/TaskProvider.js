import { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(null);
    const [overdueTasks, setOverdueTasks] = useState(null);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const upcomingPageSize = 2;
    const [upcomingPage, setUpcomingPage] = useState(1);
    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                overdueTasks,
                setOverdueTasks,
                upcomingTasks,
                setUpcomingTasks,
                upcomingPage,
                upcomingPageSize,
                setUpcomingPage,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
