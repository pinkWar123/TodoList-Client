import { Form } from 'react-bootstrap';
import styles from './NoBorderInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function TaskNameInput({ placeholer = 'Task name', ...props }) {
    return <Form.Control placeholder={placeholer} className={cx('task-name')} {...props} />;
}

function DescriptionInput({ placeholder = 'Descriptions', ...props }) {
    return <Form.Control placeholder={placeholder} className={cx('desc')} {...props} />;
}

function CombinedInput() {
    return (
        <>
            <TaskNameInput />
            <DescriptionInput />
        </>
    );
}

export default CombinedInput;
export { TaskNameInput, DescriptionInput };
