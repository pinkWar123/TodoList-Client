import { Button, CloseButton, OverlayTrigger } from 'react-bootstrap';
import { UpcomingIcon } from '../Icon/Icon';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';
import { forwardRef } from 'react';
import { dateRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

const cx = classNames.bind(styles);

const getDay = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
};

const DateDiv = forwardRef((props, ref) => {
    return (
        <div className={cx('content')} ref={ref} {...props}>
            <div className="d-flex">
                <div>
                    <UpcomingIcon />
                </div>
                <div className={cx('text')}>{getDay(props.date)}</div>
            </div>
            <div>
                <CloseButton
                    style={{ flex: '1' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        props.deleteDueDate();
                    }}
                />
            </div>
        </div>
    );
});

const DueDateDiv = forwardRef((props, ref) => {
    console.log(props);
    return (
        <div className={cx('due-date-wrapper')} ref={ref} {...props}>
            <div className={cx('title')}>Due date</div>
            <div className={cx('plus-icon')}>{!props.hasduedate ? '+' : ''}</div>
        </div>
    );
});

function DatePicker({ task }) {
    const { setTasks } = useTaskContext();
    const deleteDueDate = async () => {
        const response = await dateRequest.deleteDueDate({ taskId: task._id });
        if (response && response.status === 200) {
            toast.success('Remove due date successfully');
            setTasks((prev) => {
                return prev.map((item) => {
                    if (item._id === task._id) {
                        task.dueDate = null;
                        return task;
                    } else return item;
                });
            });
        } else toast.error('Remove due date failed');
    };

    return (
        <div>
            {!task.dueDate ? (
                <OverlayTrigger trigger="click" rootClose placement="auto" overlay={DatePickerContent({ task })}>
                    <DueDateDiv hasduedate={task.dueDate ? true : false} />
                </OverlayTrigger>
            ) : (
                <DueDateDiv hasduedate={task.dueDate ? true : false} />
            )}
            {task.dueDate && (
                <OverlayTrigger trigger="click" rootClose overlay={DatePickerContent({ task })} placement="auto">
                    <DateDiv date={task.dueDate} deleteDueDate={deleteDueDate} />
                </OverlayTrigger>
            )}
            <hr />
        </div>
    );
}

export default DatePicker;
