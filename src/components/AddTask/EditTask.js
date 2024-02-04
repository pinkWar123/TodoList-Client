import { useEditableRef } from '~/hooks';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import Input from '../NoBorderInput/Inputs';
import styles from './AddTask.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function EditTask({ taskName, desc, onSubmit }) {
    const [_taskName, setTaskName] = useState(taskName || '');
    const [_description, setDescription] = useState(desc || '');
    const { editableRef: taskNameRef } = useEditableRef(taskName || '', false);
    const { editableRef: descRef } = useEditableRef(desc || '', false);
    const [showButtons, setShowButtons] = useState(false);
    const toggleButtons = () => setShowButtons((prev) => !prev);
    return (
        <div style={{ width: '100%' }} onClick={() => setShowButtons(true)}>
            <Input
                clear={true}
                placeholder="Task name..."
                primary
                ref={taskNameRef}
                setValue={setTaskName}
                className={cx('task-wrapper')}
            />
            <Input
                clear={true}
                placeholder="Description..."
                ref={descRef}
                setValue={setDescription}
                className={cx('desc-wrapper')}
            />

            {showButtons && (
                <>
                    <hr />
                    <div className="me-auto">
                        <CancelButton
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleButtons();
                            }}
                        ></CancelButton>
                        <ConfirmButton
                            title="Update"
                            onClick={async () => {
                                await onSubmit({ taskName: _taskName, description: _description });
                                toggleButtons();
                                toast.success('Edit task successfully');
                            }}
                        ></ConfirmButton>
                    </div>
                </>
            )}
        </div>
    );
}

export default EditTask;
