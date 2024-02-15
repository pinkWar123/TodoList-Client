import ListTask from '~/components/ListTask';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { usePagination } from '~/hooks';
import { taskRequest } from '~/services/requests';
import { formatDate } from '~/utils';
import styles from './Upcoming.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Upcoming() {
    const { upcomingTasks, setUpcomingTasks, upcomingPageSize, upcomingPage, setUpcomingPage } = useTaskContext();
    const { getUpcomingTasks, getUpcomingTasksNumDates } = taskRequest;
    const { fetchMoreTasks, isLastPage, page, pageSize } = usePagination({
        getNumDates: getUpcomingTasksNumDates,
        getTasks: getUpcomingTasks,
        pageSize: upcomingPageSize,
        tasks: upcomingTasks,
        setTasks: setUpcomingTasks,
        page: upcomingPage,
        setPage: setUpcomingPage,
    });
    const renderUpcomingTasks = () => {
        return (
            upcomingTasks &&
            upcomingTasks.length > 0 &&
            upcomingTasks.map((task) => {
                return (
                    <div style={{ paddingBottom: '32px' }} key={task.date}>
                        <h5>{formatDate(task.date)}</h5>
                        <hr />
                        <ul>
                            {task.tasks &&
                                task.tasks.length > 0 &&
                                task.tasks.map((item, index) => (
                                    <li key={item._id}>
                                        <ListTask
                                            tasks={task.tasks}
                                            setTasks={setUpcomingTasks}
                                            index={index}
                                            fetchTasks={() => getUpcomingTasks({ page: 1, pageSize: page * pageSize })}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                );
            })
        );
    };
    return (
        <div>
            <h1>Upcoming tasks</h1>
            {renderUpcomingTasks()}
            {isLastPage && (
                <div className={cx('see-more')} onClick={fetchMoreTasks}>
                    See more upcoming tasks
                </div>
            )}
        </div>
    );
}

export default Upcoming;
