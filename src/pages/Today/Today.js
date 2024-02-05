import { Icon } from '~/components/Icon';
import styles from './Today.module.scss';
import classNames from 'classnames/bind';
import ListTask from '~/components/ListTask';
import AddTask from '~/components/AddTask';
import { useEffect } from 'react';
import { taskRequest } from '~/services/requests';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

const cx = classNames.bind(styles);

function Today() {
    const { tasks, setTasks } = useTaskContext();
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await taskRequest.getTodayTasks();
            setTasks(response?.data);
        };
        fetchTasks();
    }, [setTasks]);

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
                        <ListTask index={index} />
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    );
}

export default Today;
