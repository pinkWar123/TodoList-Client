import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { Button, Form } from 'react-bootstrap';

const cx = classNames.bind(styles);

function AddTask({ addTask }) {
    const [showAddTask, setShowAddTask] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const handleAddTask = async () => {
        const isAddingTaskSuccess = await addTask({ taskName, description });
        if (isAddingTaskSuccess) {
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
                            onChange={(e) => setTaskName(e.target.value)}
                            value={taskName}
                        />
                        <Form.Control
                            placeholder="Descriptions"
                            className={cx('desc')}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
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
                                s
                                disabled={taskName === ''}
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
