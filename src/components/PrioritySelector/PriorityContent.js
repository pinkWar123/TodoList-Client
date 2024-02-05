import { Popover } from 'react-bootstrap';
import Item from './Item';

const priorities = [1, 2, 3, 4];
function PriorityContent({ priority, handleUpdatePriority }) {
    return (
        <Popover id="priority" style={{ width: '15%' }}>
            <Popover.Body style={{ padding: '4px' }}>
                {priorities.map((_priority, index) => (
                    <Item
                        key={index}
                        priority={_priority}
                        selected={index + 1 === priority}
                        onClick={() => handleUpdatePriority(index)}
                    />
                ))}
            </Popover.Body>
        </Popover>
    );
}

export default PriorityContent;
