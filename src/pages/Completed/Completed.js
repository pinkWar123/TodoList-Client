import { formatDate } from '~/utils';
import Item from './Item';
import { useEffect, useState } from 'react';
import { taskRequest } from '~/services/requests';

import styles from './Completed.module.scss';
import classNames from 'classnames/bind';
import { usePagination } from '~/hooks';

const cx = classNames.bind(styles);
function Completed() {
    // const [tasks, setTasks] = useState([]);
    // const [page, setPage] = useState(1);
    // const [numDates, setNumDates] = useState();
    // const pageSize = 2;
    const { getCompletedTasksNumDates, getCompletedTasks } = taskRequest;
    const { fetchMoreTasks, isLastPage, tasks } = usePagination({
        getNumDates: getCompletedTasksNumDates,
        getTasks: getCompletedTasks,
        pageSize: 2,
    });
    // useEffect(() => {
    //     const fetchNumDates = async () => {
    //         const response = await taskRequest.getCompletedTasksNumDates();
    //         if (response && response.status === 200) {
    //             setNumDates(response.data);
    //         }
    //     };
    //     fetchNumDates();
    // }, []);
    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         const response = await taskRequest.getCompletedTasks({ page, pageSize });
    //         console.log(response);
    //         if (response && response.status === 200) {
    //             setTasks(response.data);
    //         }
    //     };
    //     fetchTasks();
    // }, []);
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
    // const fetchMoreTasks = async () => {
    //     const response = await taskRequest.getCompletedTasks({ page: page + 1, pageSize });
    //     console.log(response.data);
    //     if (response && response.status === 200) {
    //         if (Array.isArray(response.data) && response.data.length > 0) {
    //             setTasks((prev) => [...prev, ...response.data]);
    //             setPage((prev) => prev + 1);
    //         }
    //     }
    // };
    return (
        <div>
            {renderCompletedTasks()}
            {isLastPage && (
                <div className={cx('see-more')} onClick={async () => await fetchMoreTasks()}>
                    See more dates ...
                </div>
            )}
        </div>
    );
}

export default Completed;
