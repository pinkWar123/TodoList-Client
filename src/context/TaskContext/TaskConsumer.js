import { useContext } from 'react';
import { TaskContext } from './TaskProvider';

const useTaskContext = () => {
    const context = useContext(TaskContext);
    return context;
};

export default useTaskContext;
