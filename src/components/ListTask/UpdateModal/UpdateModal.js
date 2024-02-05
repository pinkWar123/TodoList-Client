import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

import styles from './UpdateModal.module.scss';
import classNames from 'classnames/bind';
import DatePicker from '~/components/DatePicker';
import PrioritySelector from '~/components/PrioritySelector';
import EditTask from '~/components/AddTask/EditTask';
import { priorityRequest, taskRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import { useState } from 'react';

const cx = classNames.bind(styles);

function UpdateModal({ show, onHide, index }) {
    const { setTasks, tasks } = useTaskContext();
    const task = tasks[index];
    const [priority, setPriority] = useState(() => {
        const _priority = tasks[index].priority || 4;
        return _priority;
    });
    const handleCompleteTask = async () => {
        const { taskName, description, dueDate, priority } = task;
        const response = await taskRequest.updateTask({
            _id: task._id,
            task: { taskName, description, dueDate, priority, status: 1 },
        });
        if (response && response.status === 200) {
            setTasks((prev) => {
                if (prev.length > 0) {
                    return prev.filter((_, _index) => _index !== index);
                }
            });
            toast.success('Complete task!');
        }
        onHide();
    };

    const handleUpdateTask = async ({ taskName, description }) => {
        const response = await taskRequest.updateTask({ _id: tasks[index]._id, task: { taskName, description } });
        if (response && response.status === 200) {
            setTasks((prev) => {
                return prev.map((item, _index) => {
                    if (_index === index) {
                        item.taskName = taskName;
                        item.description = description;
                    }
                    return item;
                });
            });
        }
    };
    const handleUpdatePriority = async (index) => {
        const response = await priorityRequest.postPriority({ taskId: task._id, priority: index + 1 });
        if (response && response.status === 200) {
            setTasks((prev) => {
                return prev.map((item) => {
                    if (item._id === task._id) {
                        item.priority = index + 1;
                    }
                    return item;
                });
            });
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
                    <DatePicker task={tasks[index]} />
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
