import { useState } from 'react';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import Input from '../NoBorderInput/Inputs';
import { useEditableRef } from '~/hooks';
import { AddTaskDatePicker } from '../DatePicker';
import PrioritySelector from '../PrioritySelector';

const cx = classNames.bind(styles);

function AddTaskEdit({ onCancel, onSubmit, onHide, taskName, description }) {
    const [_taskName, setTaskName] = useState(taskName || '');
    const [_description, setDescription] = useState(description || '');
    const { editableRef: taskNameRef } = useEditableRef(taskName || '');
    const { editableRef: descRef } = useEditableRef(description || '');
    const [dateValue, setDateValue] = useState(() => {
        const date = new Date();
        date.setHours(23, 59);
        return date;
    });
    const [priority, setPriority] = useState(4);
    const handleUpdateDueDate = (timestamp) => {
        setDateValue(timestamp);
        document.body.click();
    };
    return (
        <div className={cx('edit-comment-wrapper')}>
            <Input clear={true} placeholder="Task name..." primary ref={taskNameRef} setValue={setTaskName} />
            <Input clear={true} placeholder="Description..." ref={descRef} setValue={setDescription} />
            <div className="d-flex">
                <AddTaskDatePicker
                    dateValue={dateValue}
                    setDateValue={setDateValue}
                    handleUpdateDueDate={handleUpdateDueDate}
                />
                <PrioritySelector
                    priority={priority}
                    handleUpdatePriority={(index) => {
                        setPriority(index + 1);
                        document.body.click();
                    }}
                />
            </div>
            <hr />
            <div>
                <CancelButton onClick={onCancel}></CancelButton>
                <ConfirmButton
                    title="Add task"
                    onClick={() =>
                        onSubmit({ taskName: _taskName, description: _description, dueDate: dateValue, priority })
                    }
                ></ConfirmButton>
            </div>
        </div>
    );
}

export default AddTaskEdit;
