import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { Button, Form } from 'react-bootstrap';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { taskRequest } from '~/services/requests';

const cx = classNames.bind(styles);

function AddTask() {
    const [showAddTask, setShowAddTask] = useState(false);
    const { setTasks } = useTaskContext();

    const [currentTask, setCurrentTask] = useState({});

    const handleAddTask = async () => {
        const { taskName, description } = currentTask;
        const response = await taskRequest.createNewTask({ taskName, description });
        console.log('Add task:', response);
        if (response) {
            const newTasks = await taskRequest.getAllTasks();
            console.log(newTasks);
            setTasks(newTasks.data);
            setShowAddTask(false);
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
                <div style={{ paddingBottom: '48px', width: '100%', display: 'flex' }}>
                    <div className={cx('add-task-wrapper')}>
                        <Form.Control
                            placeholder="Task name"
                            className={cx('task-name')}
                            onChange={(e) => setCurrentTask((prev) => ({ ...prev, taskName: e.target.value }))}
                            value={currentTask.taskName || ''}
                        />
                        <Form.Control
                            placeholder="Descriptions"
                            className={cx('desc')}
                            onChange={(e) => setCurrentTask((prev) => ({ ...prev, description: e.target.value }))}
                            value={currentTask.description || ''}
                        />

                        <hr />
                        <div className={cx('footer')}>
                            <Button
                                variant="light"
                                className={cx('btn')}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAddTask(false);
                                }}
                            >
                                <span className={cx('btn-text')}>Cancel</span>
                            </Button>
                            <Button
                                variant="danger"
                                className={cx('btn')}
                                disabled={!currentTask.taskName || currentTask.taskName === ''}
                                onClick={handleAddTask}
                            >
                                <span className={cx('btn-text')}>Add task</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddTask;
