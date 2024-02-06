import { OverlayTrigger } from 'react-bootstrap';
import DatePickerContent from './DatePickerContent';
import { DateDiv, DueDateDiv } from './DateDiv';

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
