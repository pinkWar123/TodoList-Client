import { useState } from 'react';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import Input from '../NoBorderInput/Inputs';
import { useEditableRef } from '~/hooks';

const cx = classNames.bind(styles);

function AddTaskEdit({ onCancel, onSubmit }) {
    const [_taskName, setTaskName] = useState('');
    const [_description, setDescription] = useState('');
    const { editableRef: taskNameRef } = useEditableRef('');
    const { editableRef: descRef } = useEditableRef('');
    return (
        <div className={cx('edit-comment-wrapper')}>
            <Input clear={true} placeholder="Task name..." primary ref={taskNameRef} setValue={setTaskName} />
            <Input clear={true} placeholder="Description..." ref={descRef} setValue={setDescription} />

            <hr />
            <div>
                <CancelButton onClick={onCancel}></CancelButton>
                <ConfirmButton
                    title="Add task"
                    onClick={() => onSubmit({ taskName: _taskName, description: _description })}
                ></ConfirmButton>
            </div>
        </div>
    );
}

export default AddTaskEdit;
