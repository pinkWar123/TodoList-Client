import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { taskRequest } from '~/services/requests';
import AddTaskEdit from './AddTaskEdit';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function AddTask() {
    const [showAddTask, setShowAddTask] = useState(false);
    const { setTasks } = useTaskContext();

    const handleAddTask = async (currentTask) => {
        const response = await taskRequest.createNewTask(currentTask);
        if (response) {
            const newTasks = await taskRequest.getTodayTasks();
            setTasks(newTasks.data);
            setShowAddTask(false);
            toast.success('Add task successfully');
        }
    };
    return (
        <div className={cx('wrapper')} onClick={() => setShowAddTask(true)}>
            {!showAddTask ? (
                <div style={{ cursor: 'pointer', display: 'flex' }}>
                    <Icon.PlusIcon />
                    <div className={cx('text')}>Add task</div>
                </div>
            ) : (
                <div className={cx('edit')}>
                    <div className={cx('add-task-wrapper')}>
                        <AddTaskEdit
                            onCancel={(e) => {
                                e.stopPropagation();
                                setShowAddTask((prev) => !prev);
                            }}
                            onSubmit={(value) => handleAddTask(value)}
                            onHide={() => setShowAddTask((prev) => !prev)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddTask;
