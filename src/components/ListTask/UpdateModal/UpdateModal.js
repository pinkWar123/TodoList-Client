import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';

import styles from './UpdateModal.module.scss';
import classNames from 'classnames/bind';
import DatePicker from '~/components/DatePicker';
import PrioritySelector from '~/components/PrioritySelector';
import EditTask from '~/components/AddTask/EditTask';
import { priorityRequest, taskRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UpdateModal({ show, onHide, index, tasks, setTasks, fetchTasks }) {
    const task = tasks[index];
    const [priority, setPriority] = useState(() => {
        const _priority = tasks[index].priority || 4;
        return _priority;
    });
    const handleCompleteTask = async (index) => {
        const response = await taskRequest.completeTask({
            _id: tasks[index]._id,
        });
        if (response && response.status === 200) {
            const response = await fetchTasks();
            setTasks(response.data);
            toast.success('Complete task!');
        }
        onHide();
    };

    const handleUpdateTask = async ({ taskName, description, dueDate, status }) => {
        const response = await taskRequest.updateTask({
            _id: tasks[index]._id,
            task: { taskName, description, dueDate, status },
        });
        if (response && response.status === 200) {
            const tasks = await fetchTasks();
            setTasks(tasks);
        }
    };
    const handleUpdatePriority = async (index) => {
        const response = await priorityRequest.postPriority({ taskId: task._id, priority: index + 1 });
        if (response && response.status === 200) {
            const tasks = await fetchTasks();
            if (tasks && tasks.status === 200) {
                setTasks(tasks.data);
            }
            setPriority(index + 1);
            toast.success('Update priority successfully');
            document.body.click();
        }
    };
    return (
        <Modal show={show} onHide={onHide} contentClassName={cx('modal')} dialogClassName={cx('modal')} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <div className="d-flex">
                <div className={cx('first-column-wrapper')}>
                    <div className="d-flex" style={{ padding: '24px' }}>
                        <CheckBox style={{ marginTop: '8px' }} onClick={handleCompleteTask} />
                        <EditTask
                            taskName={task.taskName}
                            desc={task.description}
                            onSubmit={(value) => handleUpdateTask(value)}
                        />
                    </div>
                    <hr style={{ width: '90%', margin: '0 auto' }} />
                    <div className={cx('comment-wrapper')}>
                        <Comment taskId={tasks[index]._id} />
                    </div>
                </div>
                <div className={cx('sec-column-wrapper')}>
                    <DatePicker task={tasks[index]} setTasks={setTasks} fetchTasks={fetchTasks} />
                    <div>
                        <div>Priority</div>
                        <PrioritySelector handleUpdatePriority={handleUpdatePriority} priority={priority} />
                    </div>
                    <div>Labels</div>
                </div>
            </div>
        </Modal>
    );
}

export default UpdateModal;
