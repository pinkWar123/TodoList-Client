import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './ListTask.module.scss';
import classNames from 'classnames/bind';
import { Modal } from 'react-bootstrap';
import UpdateModal from './UpdateModal/UpdateModal';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { taskRequest } from '~/services/requests';

const cx = classNames.bind(styles);

function ListTask({ index }) {
    const [updateModal, setUpdateModal] = useState(false);
    const { tasks, setTasks } = useTaskContext();
    const handleRemoveTask = async (index) => {
        const response = await taskRequest.removeTask({ _id: tasks[index]._id });
        if (response) {
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
                <span className={cx('circle')} onClick={() => handleRemoveTask(index)}>
                    <div className={cx('check-icon')}>
                        <Icon.CheckIcon />
                    </div>
                </span>
                <div className={cx('main-content')}>
                    <div className={cx('first-row')}>
                        <div className={cx('title')}>{tasks[index].taskName}</div>
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
