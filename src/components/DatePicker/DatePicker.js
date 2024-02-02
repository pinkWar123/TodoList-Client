import { Button, OverlayTrigger } from 'react-bootstrap';
import { UpcomingIcon } from '../Icon/Icon';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';
import { forwardRef, useState } from 'react';

const cx = classNames.bind(styles);

const getDay = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
};

const DueDateDiv = forwardRef((props, ref) => {
    return (
        <div className={cx('content')} ref={ref} {...props}>
            <span>
                <UpcomingIcon />
            </span>
            <span className={cx('text')}>{getDay()}</span>
        </div>
    );
});

function DatePicker({ taskId }) {
    return (
        <div>
            <div className={cx('title')}>Due date</div>
            <OverlayTrigger trigger="click" rootClose overlay={DatePickerContent({ taskId })} placement="bottom">
                <DueDateDiv />
            </OverlayTrigger>
            <hr />
        </div>
    );
}

export default DatePicker;
