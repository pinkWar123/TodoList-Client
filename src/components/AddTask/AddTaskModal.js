import { Modal } from 'react-bootstrap';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { taskRequest } from '~/services/requests';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { toast } from 'react-toastify';
import AddTaskEdit from './AddTaskEdit';

const cx = classNames.bind(styles);

function AddTaskModal({ show, onHide }) {
    const { setTasks } = useTaskContext();
    const handleAddTask = async (currentTask) => {
        const value = currentTask;
        const response = await taskRequest.createNewTask(value);
        if (response) {
            const newTasks = await taskRequest.getTodayTasks();
            setTasks(newTasks.data);
            onHide();
            toast.success('Add task successfully');
        }
    };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton />
            <Modal.Body>
                <div className={cx('edit-comment-wrapper')}>
                    <div className={cx('extra')}>
                        <AddTaskEdit onCancel={onHide} onSubmit={handleAddTask} onHide={onHide} />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddTaskModal;
