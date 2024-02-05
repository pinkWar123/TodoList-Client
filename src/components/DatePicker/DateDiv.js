import { forwardRef } from 'react';
import { UpcomingIcon } from '../Icon/Icon';
import { CloseButton } from 'react-bootstrap';
import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';

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
    return (
        <div className={cx('due-date-wrapper')} ref={ref} {...props}>
            <div className={cx('title')}>Due date</div>
            <div className={cx('plus-icon')}>{!props.hasduedate ? '+' : ''}</div>
        </div>
    );
});

export { DateDiv, DueDateDiv };
