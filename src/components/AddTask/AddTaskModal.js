import { Modal } from 'react-bootstrap';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { ConfirmButton } from '../Button/TextButton';
import Input from '../NoBorderInput/Inputs';
import { useState } from 'react';
import { useEditableRef } from '~/hooks';
import { taskRequest } from '~/services/requests';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function AddTaskModal({ show, onHide }) {
    const { setTasks } = useTaskContext();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const { editableRef: taskNameRef } = useEditableRef('');
    const { editableRef: descRef } = useEditableRef('');
    const handleAddTask = async (currentTask) => {
        const { taskName, description } = currentTask;
        const response = await taskRequest.createNewTask({ taskName, description });
        if (response) {
            const newTasks = await taskRequest.getAllTasks();
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
                    <Input clear={true} placeholder="Task name..." primary ref={taskNameRef} setValue={setTaskName} />
                    <Input clear={true} placeholder="Description..." ref={descRef} setValue={setDescription} />

                    <hr />
                    <div>
                        <ConfirmButton
                            title="Add task"
                            onClick={() => handleAddTask({ taskName, description })}
                        ></ConfirmButton>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddTaskModal;
