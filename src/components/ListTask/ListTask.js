import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './ListTask.module.scss';
import classNames from 'classnames/bind';
import UpdateModal from './UpdateModal/UpdateModal';
import { taskRequest } from '~/services/requests';
import Item from '../PrioritySelector/Item';

const cx = classNames.bind(styles);

function ListTask({ tasks, setTasks, index, fetchTasks }) {
    const [updateModal, setUpdateModal] = useState(false);
    const handleCompleteTask = async (index) => {
        const { taskName, description, dueDate, priority } = tasks[index];
        const response = await taskRequest.completeTask({
            _id: tasks[index]._id,
        });
        if (response && response.status === 200) {
            const response = await fetchTasks();
            setTasks(response.data);
        }
    };
    return (
        <>
            <div className={cx('wrapper')} onClick={() => setUpdateModal(true)}>
                <div className={cx('drag-icon')}>
                    <Icon.DragIcon />
                </div>
                <span
                    className={cx('circle')}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCompleteTask(index);
                    }}
                >
                    <div className={cx('check-icon')}>
                        <Icon.CheckIcon />
                    </div>
                </span>
                <div className={cx('main-content')}>
                    <div className={cx('first-row')}>
                        <div className="d-flex">
                            <div className={cx('title')}>{tasks[index].taskName}</div>
                            <div style={{ marginTop: '-4px' }}>
                                <Item priority={tasks[index].priority} />
                            </div>
                        </div>
                        <div className={cx('first-row-icon')}>
                            <Icon.EditIcon />
                            <Icon.SetDayIcon />
                            <Icon.CommentIcon />
                            <Icon.MoreIcon />
                        </div>
                    </div>
                    <div className={cx('desc')}>{tasks[index].description}</div>
                </div>
            </div>

            <UpdateModal
                show={updateModal}
                onHide={() => setUpdateModal(false)}
                index={index}
                tasks={tasks}
                setTasks={setTasks}
                fetchTasks={fetchTasks}
            />
        </>
    );
}

export default ListTask;

/**
[
    {
        date: Date1,
        tasks: [task1, task2, task3, task4, task5, task6]
    },
    {
        date: Date2,
        tasks: [task1, task2, task3, task4]
    },
    ...
]
 */
