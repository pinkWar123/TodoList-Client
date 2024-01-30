import { Button, OverlayTrigger } from 'react-bootstrap';
import { UpcomingIcon } from '../Icon/Icon';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';

const cx = classNames.bind(styles);

const getDay = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
};

function DatePicker() {
    return (
        <div>
            <div className={cx('title')}>Due date</div>
            <OverlayTrigger trigger="click" overlay={DatePickerContent()} placement="bottom">
                <Button variant="light" className="w-100" style={{ textAlign: 'left' }}>
                    <div className={cx('content')}>
                        <span>
                            <UpcomingIcon />
                        </span>
                        <span className={cx('text')}>{getDay()}</span>
                    </div>
                </Button>
            </OverlayTrigger>
            <hr />
        </div>
    );
}

export default DatePicker;
