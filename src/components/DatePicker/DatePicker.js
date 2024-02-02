import { Button, CloseButton, OverlayTrigger } from 'react-bootstrap';
import { UpcomingIcon } from '../Icon/Icon';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';
import { forwardRef, useEffect, useState } from 'react';
import { dateRequest } from '~/services/requests';
import { toast } from 'react-toastify';

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
                <CloseButton style={{ flex: '1' }} onClick={props.deleteDueDate} />
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

function DatePicker({ taskId }) {
    const [dueDate, setDueDate] = useState(null);
    useEffect(() => {
        const fetchDueDate = async () => {
            const response = await dateRequest.getDueDate({ taskId });
            console.log(response);
            if (response && response.status === 200) {
                console.log(new Date(response.data));
                setDueDate(response.data);
            }
        };
        fetchDueDate();
    }, [taskId]);

    const deleteDueDate = async () => {
        const response = await dateRequest.deleteDueDate({ taskId });
        if (response && response.status === 200) {
            toast.success('Remove due date successfully');
            setDueDate(null);
        } else toast.error('Remove due date failed');
    };

    return (
        <div>
            {!dueDate ? (
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="auto"
                    overlay={DatePickerContent({ taskId, setDueDate })}
                >
                    <DueDateDiv hasduedate={dueDate ? true : false} />
                </OverlayTrigger>
            ) : (
                <DueDateDiv hasduedate={dueDate ? true : false} />
            )}
            {dueDate && (
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    overlay={DatePickerContent({ taskId, setDueDate })}
                    placement="auto"
                >
                    <DateDiv date={dueDate} deleteDueDate={deleteDueDate} />
                </OverlayTrigger>
            )}
            <hr />
        </div>
    );
}

export default DatePicker;
