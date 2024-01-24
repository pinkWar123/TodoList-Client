import { Button, Form } from 'react-bootstrap';
import styles from './NoBorderInput.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { TextButton } from '../Button';
import { CancelButton, ConfirmButton } from '../Button/TextButton';

const cx = classNames.bind(styles);

function TaskNameInput({ placeholder = 'Task name', ...props }) {
    return <Form.Control placeholder={placeholder} className={cx('task-name')} {...props} />;
}

function DescriptionInput({ placeholder = 'Descriptions', ...props }) {
    return <Form.Control placeholder={placeholder} className={cx('desc', { ...props.className })} {...props} />;
}

function CombinedInput({ taskName, description, onTaskNameChange, onDescriptionChange }) {
    const [showBorder, setShowBorder] = useState(false);
    const handleShowBorder = () => setShowBorder(true);
    const handleHideBorder = () => setShowBorder(false);
    return (
        <div style={{ width: '100%' }}>
            <div className={cx({ border: showBorder })}>
                <TaskNameInput value={taskName} onChange={onTaskNameChange} onClick={handleShowBorder} />
                <DescriptionInput value={description} onChange={onDescriptionChange} onClick={handleShowBorder} />
            </div>
            {showBorder && (
                <div className={cx('btn-row')}>
                    <CancelButton onClick={handleHideBorder} />
                    <ConfirmButton title="Save" onClick={handleHideBorder} />
                </div>
            )}
        </div>
    );
}

export default CombinedInput;
export { TaskNameInput, DescriptionInput };
