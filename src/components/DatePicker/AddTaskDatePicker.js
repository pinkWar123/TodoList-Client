import { OverlayTrigger } from 'react-bootstrap';
import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';
import { forwardRef } from 'react';
import { DateDiv, DueDateDiv } from './DateDiv';

const cx = classNames.bind(styles);

function AddTaskDatePicker({ dateValue, setDateValue, handleUpdateDueDate }) {
    return (
        <div>
            <OverlayTrigger
                trigger="click"
                placement="auto"
                rootClose
                overlay={DatePickerContent({ dateValue, setDateValue, handleUpdateDueDate })}
            >
                {dateValue ? (
                    <DateDiv date={dateValue} deleteDueDate={() => setDateValue(null)} />
                ) : (
                    <DueDateDiv hasduedate={false} />
                )}
            </OverlayTrigger>
        </div>
    );
}

export default AddTaskDatePicker;
