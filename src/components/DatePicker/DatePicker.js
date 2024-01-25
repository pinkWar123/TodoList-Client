import { Button, OverlayTrigger } from 'react-bootstrap';
import { UpcomingIcon } from '../Icon/Icon';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';

const cx = classNames.bind(styles);

function DatePicker() {
    return (
        <div>
            <div className={cx('title')}>Due date</div>
            <OverlayTrigger trigger="click" overlay={DatePickerContent()} placement="bottom">
                <Button>
                    <div className={cx('content')}>
                        <span>
                            <UpcomingIcon />
                        </span>
                        <span className={cx('text')}>22 Jan</span>
                    </div>
                </Button>
            </OverlayTrigger>
            <hr />
        </div>
    );
}

export default DatePicker;
