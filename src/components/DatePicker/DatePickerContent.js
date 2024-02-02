import { Form, Popover } from 'react-bootstrap';
import { BrightIcon, NextWeekIcon, ThisWeekendIcon } from '../Icon/Icon';
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import { dateRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ConfirmButton } from '../Button/TextButton';
import Calendar from 'react-calendar';

const cx = classNames.bind(styles);

function DateItem({ title, icon, iconColor, onClick }) {
    return (
        <div className={cx('wrapper')} onClick={onClick}>
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

function DatePickerContent({ taskId, setDueDate }) {
    console.log('rendered');
    const [dateValue, setDateValue] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    useEffect(() => {
        const fetchDueDate = async () => {
            const response = await dateRequest.getDueDate({ taskId });
            console.log(response);
            if (response && response.status === 200) {
                console.log(new Date(response.data));
                setDateValue(response.data);
            }
        };
        fetchDueDate();
    }, [taskId]);
    useEffect(() => {
        if (dateValue) {
            setHour(new Date(dateValue).getHours());
            setMinute(new Date(dateValue).getMinutes());
        } else {
            setHour(0);
            setMinute(0);
        }
    }, [dateValue]);
    const handleUpdateDueDate = async (timestamp) => {
        const date = new Date(timestamp);
        date.setHours(hour, minute);
        const response = await dateRequest.postDueDate({ taskId, timestamp: date });
        document.body.click();
        if (response && response.status === 200) {
            toast.success('Update due date sucessfully');
            setHour(new Date(date).getHours());
            setMinute(new Date(date).getMinutes());
            setDueDate(date);
        } else toast.error('Update due date failed');
    };

    const handleShortcutClicked = async (index) => {
        let currentDay = dateValue ? new Date(dateValue) : new Date();
        if (index === 0) {
            currentDay.setHours(23, 59);
            setHour(23);
            setMinute(59);
        } else if (index === 1) {
            currentDay = new Date(currentDay.getTime() + 24 * 60 * 60 * 1000);
        } else if (index === 2) {
            const dayOfWeek = currentDay.getDay();
            const daysUntilWeekend = dayOfWeek === 5 ? 1 : dayOfWeek === 6 ? 0 : 6 - dayOfWeek;
            currentDay = new Date(currentDay.getTime() + daysUntilWeekend * 24 * 60 * 60 * 1000);
        } else if (index === 3) {
            currentDay = new Date(currentDay.getTime() + 7 * 24 * 60 * 60 * 1000);
        }
        const response = await dateRequest.postDueDate({ taskId, timestamp: currentDay });
        if (response && response.status === 200) {
            toast.success('Update due date successfully');
            setHour(currentDay.getHours());
            setMinute(currentDay.getMinutes());
            setDueDate(currentDay);
            document.body.click();
        }
    };

    return (
        <Popover id="popover" style={{ width: '250px' }}>
            <Popover.Header></Popover.Header>
            <Popover.Body>
                {items.map((item, index) => (
                    <DateItem
                        title={item.title}
                        icon={item.icon}
                        iconColor={item.iconColor}
                        key={index}
                        onClick={() => handleShortcutClicked(index)}
                    />
                ))}
                <hr />

                <div>
                    <Calendar
                        value={dateValue}
                        onChange={async (value) => {
                            await handleUpdateDueDate(value);
                            setDateValue(value);
                            document.body.click();
                        }}
                    />
                    <Form.Label>Hour</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        max="23"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                    />
                    <Form.Label>Minute</Form.Label>
                    <Form.Control
                        type="number"
                        min="0"
                        max="59"
                        value={minute}
                        onChange={(e) => setMinute(e.target.value)}
                    />
                    <ConfirmButton
                        title="Save"
                        onClick={async () => {
                            await handleUpdateDueDate(dateValue);
                        }}
                    ></ConfirmButton>
                </div>
            </Popover.Body>
        </Popover>
    );
}

export default DatePickerContent;
