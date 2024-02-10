import { formatDate } from '~/utils';
import Item from './Item';
import { useEffect, useState } from 'react';
import { taskRequest } from '~/services/requests';

import styles from './Completed.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Completed() {
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const [numDates, setNumDates] = useState();
    const step = 2;
    const [pageSize, setPageSize] = useState(step);
    console.log(tasks);
    useEffect(() => {
        const fetchNumDates = async () => {
            const response = await taskRequest.getCompletedTasksNumDates();
            if (response && response.status === 200) {
                setNumDates(response.data);
            }
        };
        fetchNumDates();
    }, []);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await taskRequest.getCompletedTasks({ page, pageSize });
            console.log(response);
            if (response && response.status === 200) {
                setTasks(response.data);
            }
        };
        fetchTasks();
    }, [page, pageSize]);
    const renderCompletedTasks = () => {
        if (tasks && tasks.length > 0) {
            return tasks.map((task) => {
                return (
                    <div style={{ paddingBottom: '32px' }}>
                        <h5>{formatDate(task.date)}</h5>
                        <hr />
                        <ul>
                            {task.tasks &&
                                task.tasks.length > 0 &&
                                task.tasks.map((item, index) => (
                                    <li key={item._id}>
                                        <Item taskName={item.taskName} completedAt={item.completedAt} />
                                    </li>
                                ))}
                        </ul>
                    </div>
                );
            });
        }
    };
    const fetchMoreTasks = async () => {
        const response = await taskRequest.getCompletedTasks({ page, pageSize: pageSize + step });
        if (response && response.status === 200) {
            setTasks(response.data);
            setPageSize((prev) => prev + step);
        }
    };
    return (
        <div>
            {renderCompletedTasks()}
            {page * pageSize < numDates && (
                <div className={cx('see-more')} onClick={async () => await fetchMoreTasks()}>
                    See more dates ...
                </div>
            )}
        </div>
    );
}

export default Completed;
