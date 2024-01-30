import { Popover } from 'react-bootstrap';
import { BrightIcon, NextWeekIcon, ThisWeekendIcon } from '../Icon/Icon';
import Calendar from 'react-calendar';
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DateItem({ title, icon, iconColor }) {
    return (
        <div className={cx('wrapper')}>
            <span style={{ color: iconColor }}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </div>
    );
}

const items = [
    {
        title: 'Today',
        icon: <BrightIcon />,
        iconColor: 'var(--product-library-schedule-today-fill)',
    },
    {
        title: 'Tomorrow',
        icon: <BrightIcon />,
        iconColor: 'var(--product-library-schedule-tomorrow-fill)',
    },
    {
        title: 'This weekend',
        icon: <ThisWeekendIcon />,
        iconColor: 'var(--product-library-schedule-weekend-fill)',
    },
    {
        title: 'Next week',
        icon: <NextWeekIcon />,
        iconColor: 'var(--product-library-schedule-next-week-fill)',
    },
];

function DatePickerContent() {
    const [date, setDate] = useState(new Date());
    console.log(date);
    return (
        <Popover id="popover" style={{ width: '250px' }}>
            <Popover.Header>22 Jan</Popover.Header>
            <Popover.Body>
                {items.map((item, index) => (
                    <DateItem title={item.title} icon={item.icon} iconColor={item.iconColor} key={index} />
                ))}
                <hr />
                <Calendar onChange={setDate} value={date} />
            </Popover.Body>
        </Popover>
    );
}

export default DatePickerContent;
