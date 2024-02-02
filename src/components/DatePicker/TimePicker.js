import { Popover } from 'react-bootstrap';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimePickerContent from 'react-time-picker';

function TimePicker() {
    return (
        <Popover id="time-picker">
            <Popover.Body>
                <TimePickerContent
                    onChange={(e) => {
                        console.log(e);
                    }}
                />
            </Popover.Body>
        </Popover>
    );
}

export default TimePicker;
