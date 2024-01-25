import { Popover } from 'react-bootstrap';
import { BrightIcon, NextWeekIcon, ThisWeekendIcon } from '../Icon/Icon';
import Calendar from 'react-calendar';
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
function DateItem({ title, icon }) {
    return (
        <div>
            {icon}
            <span>{title}</span>
        </div>
    );
}

const items = [
    {
        title: 'Today',
        icon: <BrightIcon />,
    },
    {
        title: 'Tomorrow',
        icon: <BrightIcon />,
    },
    {
        title: 'This weekend',
        icon: <ThisWeekendIcon />,
    },
    {
        title: 'Next week',
        icon: <NextWeekIcon />,
    },
];

function DatePickerContent() {
    const [date, setDate] = useState(new Date());
    return (
        <Popover id="popover" style={{ width: '250px' }}>
            <Popover.Header>22 Jan</Popover.Header>
            <Popover.Body>
                {items.map((item, index) => (
                    <DateItem title={item.title} icon={item.icon} key={index} />
                ))}
                <hr />
                <Calendar onChange={setDate} value={date} />
            </Popover.Body>
        </Popover>
    );
}

export default DatePickerContent;
