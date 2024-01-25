import { Popover } from 'react-bootstrap';
import { BrightIcon, NextWeekIcon, ThisWeekendIcon } from '../Icon/Icon';

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
    return (
        <Popover id="popover" style={{ width: '250px' }}>
            <Popover.Header>22 Jan</Popover.Header>
            <Popover.Body>
                {items.map((item, index) => (
                    <DateItem title={item.title} icon={item.icon} key={index} />
                ))}
                <hr />
            </Popover.Body>
        </Popover>
    );
}

export default DatePickerContent;
