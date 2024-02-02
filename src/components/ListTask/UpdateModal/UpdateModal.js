import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import CombinedInput from '~/components/NoBorderInput/Inputs';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

import styles from './UpdateModal.module.scss';
import classNames from 'classnames/bind';
import DatePicker from '~/components/DatePicker';
import CommentList from '~/components/Comment/CommentList';

const cx = classNames.bind(styles);

function UpdateModal({ show, onHide, index }) {
    const { tasks, setTasks } = useTaskContext();
    console.log(tasks[index]);
    const [task, setCurrentTask] = useState(tasks[index]);
    return (
        <Modal show={show} onHide={onHide} contentClassName={cx('modal')} dialogClassName={cx('modal')} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <div className="d-flex">
                <div className={cx('first-column-wrapper')}>
                    <div className="d-flex" style={{ padding: '24px' }}>
                        <CheckBox style={{ marginTop: '8px' }} />
                        <CombinedInput
                            taskName={task.taskName}
                            description={task.description}
                            onTaskNameChange={(e) => setCurrentTask((prev) => ({ ...prev, taskName: e.target.value }))}
                            onDescriptionChange={(e) =>
                                setCurrentTask((prev) => ({ ...prev, description: e.target.value }))
                            }
                        />
                    </div>
                    <hr style={{ width: '90%', margin: '0 auto' }} />
                    <div className={cx('comment-wrapper')}>
                        <Comment taskId={tasks[index]._id} />
                    </div>
                </div>
                <div className={cx('sec-column-wrapper')}>
                    <DatePicker taskId={tasks[index]._id} />
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
