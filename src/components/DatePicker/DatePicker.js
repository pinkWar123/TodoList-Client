import { OverlayTrigger } from 'react-bootstrap';

import styles from './DatePicker.module.scss';
import classNames from 'classnames/bind';
import DatePickerContent from './DatePickerContent';
import { useState } from 'react';
import { dateRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import useTaskContext from '~/context/TaskContext/TaskConsumer';
import { DateDiv, DueDateDiv } from './DateDiv';

const cx = classNames.bind(styles);

function DatePicker({ task }) {
    const [dateValue, setDateValue] = useState(task.dueDate);

    const { setTasks } = useTaskContext();
    const deleteDueDate = async () => {
        const response = await dateRequest.deleteDueDate({ taskId: task._id });
        if (response && response.status === 200) {
            toast.success('Remove due date successfully');
            setTasks((prev) => {
                return prev.map((item) => {
                    if (item._id === task._id) {
                        task.dueDate = null;
                        return task;
                    } else return item;
                });
            });
        } else toast.error('Remove due date failed');
    };

    const handleUpdateDueDate = async (timestamp) => {
        const response = await dateRequest.postDueDate({ taskId: task._id, timestamp });
        document.body.click();
        if (response && response.status === 200) {
            toast.success('Update due date sucessfully');

            setTasks((prev) => {
                return prev.map((item) => {
                    if (item._id === task._id) {
                        task.dueDate = timestamp;
                        return task;
                    } else return item;
                });
            });
        } else toast.error('Update due date failed');
    };

    return (
        <div>
            {!task.dueDate ? (
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="auto"
                    overlay={DatePickerContent({ dateValue, setDateValue, handleUpdateDueDate })}
                >
                    <DueDateDiv hasduedate={task.dueDate ? true : false} />
                </OverlayTrigger>
            ) : (
                <DueDateDiv hasduedate={task.dueDate ? true : false} />
            )}
            {task.dueDate && (
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    overlay={DatePickerContent({ handleUpdateDueDate, dateValue, setDateValue })}
                    placement="auto"
                >
                    <DateDiv date={task.dueDate} deleteDueDate={deleteDueDate} />
                </OverlayTrigger>
            )}
            <hr />
        </div>
    );
}

export default DatePicker;
