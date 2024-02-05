import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './ListTask.module.scss';
import classNames from 'classnames/bind';
import UpdateModal from './UpdateModal/UpdateModal';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { taskRequest } from '~/services/requests';
import Item from '../PrioritySelector/Item';

const cx = classNames.bind(styles);

function ListTask({ index }) {
    const [updateModal, setUpdateModal] = useState(false);
    const { tasks, setTasks } = useTaskContext();
    const handleCompleteTask = async (index) => {
        // const response = await taskRequest.removeTask({ _id: tasks[index]._id });
        const { taskName, description, dueDate, priority } = tasks[index];
        const response = await taskRequest.updateTask({
            _id: tasks[index]._id,
            task: { taskName, description, dueDate, priority, status: 1 },
        });
        if (response && response.status === 200) {
            setTasks((prev) => {
                if (prev.length > 0) {
                    return prev.filter((_, _index) => _index !== index);
                }
            });
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

            <UpdateModal show={updateModal} onHide={() => setUpdateModal(false)} index={index} />
        </>
    );
}

export default ListTask;
