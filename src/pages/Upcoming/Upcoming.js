import ListTask from '~/components/ListTask';
import { usePagination } from '~/hooks';
import { taskRequest } from '~/services/requests';
import { formatDate } from '~/utils';

function Upcoming() {
    const { getUpcomingTasks, getUpcomingTasksNumDates } = taskRequest;
    const { fetchMoreTasks, isLastPage, tasks, setTasks, page, pageSize } = usePagination({
        getNumDates: getUpcomingTasksNumDates,
        getTasks: getUpcomingTasks,
        pageSize: 2,
    });
    console.log(tasks);
    const renderCompletedTasks = () => {
        return tasks.map((task) => {
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
                                        setTasks={setTasks}
                                        index={index}
                                        fetchTasks={() => getUpcomingTasks({ page, pageSize })}
                                    />
                                </li>
                            ))}
                    </ul>
                </div>
            );
        });
    };
    return (
        <div>
            <h1>Upcoming tasks</h1>
            {renderCompletedTasks()}
        </div>
    );
}

export default Upcoming;
