import { Icon } from '~/components/Icon';
import styles from './Today.module.scss';
import classNames from 'classnames/bind';
import ListTask from '~/components/ListTask';
import AddTask from '~/components/AddTask';
import { useEffect, useState } from 'react';
import { taskRequest } from '~/services/requests';

const cx = classNames.bind(styles);

function Today() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await taskRequest.getAllTasks();
            setTasks(response?.data);
        };
        fetchTasks();
    }, []);
    const handleAddTask = async ({ taskName, description }) => {
        const response = await taskRequest.createNewTask({ taskName, description });
        console.log('Add task:', response);
        if (response) {
            setTasks((prev) => [...prev, { taskName, description }]);
            return true;
        }
        return false;
    };
    return (
        <div>
            <h2>Today</h2>
            <div className={cx('num-task-wrapper')}>
                <Icon.BorderedCheckIcon />
                <div className={cx('num-task')}>{tasks ? tasks.length : 0} tasks</div>
            </div>
            <ul>
                {tasks?.map((task, index) => (
                    <li key={index}>
                        <ListTask taskName={task.taskName} description={task.description} />
                    </li>
                ))}
            </ul>

            <AddTask addTask={handleAddTask} />
        </div>
    );
}

export default Today;
