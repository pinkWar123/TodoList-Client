import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

import styles from './UpdateModal.module.scss';
import classNames from 'classnames/bind';
import DatePicker from '~/components/DatePicker';
import PrioritySelector from '~/components/PrioritySelector';
import EditTask from '~/components/AddTask/EditTask';
import { taskRequest } from '~/services/requests';

const cx = classNames.bind(styles);

function UpdateModal({ show, onHide, index }) {
    const { setTasks, tasks } = useTaskContext();
    const task = tasks[index];
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
    return (
        <Modal show={show} onHide={onHide} contentClassName={cx('modal')} dialogClassName={cx('modal')} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <div className="d-flex">
                <div className={cx('first-column-wrapper')}>
                    <div className="d-flex" style={{ padding: '24px' }}>
                        <CheckBox style={{ marginTop: '8px' }} />
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
                        <PrioritySelector task={tasks[index]} />
                    </div>
                    <div>Labels</div>
                </div>
            </div>
        </Modal>
    );
}

export default UpdateModal;
