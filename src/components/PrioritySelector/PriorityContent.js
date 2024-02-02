import { Popover } from 'react-bootstrap';

import styles from './PrioritySelector.module.scss';
import classNames from 'classnames/bind';
import Item from './Item';
import { priorityRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

const cx = classNames.bind(styles);

const priorities = [1, 2, 3, 4];
function PriorityContent({ task }) {
    const { setTasks } = useTaskContext();
    const handlePostPriority = async (index) => {
        const response = await priorityRequest.postPriority({ taskId: task._id, priority: index + 1 });
        if (response && response.status === 200) {
            setTasks((prev) => {
                return prev.map((item) => {
                    if (item._id === task._id) {
                        item.priority = index + 1;
                    }
                    return item;
                });
            });
            toast.success('Update priority successfully');
            document.body.click();
        }
    };
    return (
        <Popover id="priority" style={{ width: '15%' }}>
            <Popover.Body style={{ padding: '4px' }}>
                {priorities.map((_priority, index) => (
                    <Item
                        key={index}
                        priority={_priority}
                        selected={index + 1 === task.priority}
                        onClick={() => handlePostPriority(index)}
                    />
                ))}
            </Popover.Body>
        </Popover>
    );
}

export default PriorityContent;
