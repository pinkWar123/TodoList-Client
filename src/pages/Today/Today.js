import { Icon } from '~/components/Icon';
import styles from './Today.module.scss';
import classNames from 'classnames/bind';
import ListTask from '~/components/ListTask';
import AddTask from '~/components/AddTask';
import { useEffect } from 'react';
import { taskRequest } from '~/services/requests';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { formatDate } from '~/utils';

const cx = classNames.bind(styles);

function Today() {
    const { tasks, setTasks, overdueTasks, setOverdueTasks } = useTaskContext();
    console.log(new Date());
    const fetchOverdueTasks = async () => {
        const tasks = await taskRequest.getOverdueTasks();
        return tasks;
    };
    const fetchTasks = async () => {
        const tasks = await taskRequest.getTodayTasks();
        return tasks;
    };
    useEffect(() => {
        const fetch = async () => {
            const response = await Promise.all([fetchTasks(), fetchOverdueTasks()]);
            console.log(response);
            setTasks(response[0]?.data);
            setOverdueTasks(response[1]?.data);
        };
        fetch();
    }, [setTasks, setOverdueTasks]);

    return (
        <div>
            <h2>Today</h2>
            <h6>Overdue</h6>
            <div className={cx('num-task')}>{overdueTasks ? overdueTasks.length : 0} tasks</div>
            <ul>
                {overdueTasks?.map((_, index) => (
                    <li key={index}>
                        <ListTask
                            index={index}
                            tasks={overdueTasks}
                            setTasks={setOverdueTasks}
                            fetchTasks={fetchOverdueTasks}
                        />
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '32px' }}>
                <h6>{formatDate(new Date())}</h6>
                <div className={cx('num-task-wrapper')}>
                    <Icon.BorderedCheckIcon />
                    <div className={cx('num-task')}>{tasks ? tasks.length : 0} tasks</div>
                </div>
                <ul>
                    {tasks?.map((task, index) => (
                        <li key={index}>
                            <ListTask index={index} tasks={tasks} setTasks={setTasks} fetchTasks={fetchTasks} />
                        </li>
                    ))}
                </ul>
            </div>

            <AddTask />
        </div>
    );
}

export default Today;
