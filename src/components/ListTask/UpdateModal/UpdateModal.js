import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import CombinedInput from '~/components/NoBorderInput/Inputs';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

import styles from './UpdateModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function UpdateModal({ show, onHide, index }) {
    const { tasks, setTasks } = useTaskContext();
    const [task, setCurrentTask] = useState(tasks[index]);
    return (
        <Modal show={show} onHide={onHide} dialogClassName={cx('modal')} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <div className="d-flex">
                <div style={{ width: '70%' }}>
                    <div className="d-flex">
                        <CheckBox />
                        <CombinedInput
                            taskName={task.taskName}
                            description={task.description}
                            onTaskNameChange={(e) => setCurrentTask((prev) => ({ ...prev, taskName: e.target.value }))}
                            onDescriptionChange={(e) =>
                                setCurrentTask((prev) => ({ ...prev, description: e.target.value }))
                            }
                        />
                    </div>
                    <div className={cx('comment-wrapper')}>
                        <Comment />
                    </div>
                </div>
                <div className={cx('sec-column-wrapper')}>
                    <div>
                        <div className={cx('title')}>Due date</div>
                        <div className={cx('content')}>22 Jan</div>
                        <hr />
                    </div>
                    <div>
                        <div>Priority</div>
                        <div>P4</div>
                    </div>
                    <div>Labels</div>
                </div>
            </div>
        </Modal>
    );
}

export default UpdateModal;
