import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import { DescriptionInput, TaskNameInput } from '~/components/NoBorderInput/Inputs';

function UpdateModal({ show, onHide, tasks, setTasks, index }) {
    const task = tasks[index];
    return (
        <Modal show={show} onHide={onHide} style={{ height: '90vh' }} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <Modal.Body className="d-flex">
                <div style={{ width: '80%' }}>
                    <div className="d-flex">
                        <CheckBox />
                        <div>
                            <TaskNameInput value={task.taskName} />
                            <DescriptionInput value={task.description} />
                        </div>
                    </div>
                    <Comment style={{ width: '80%' }} />
                </div>
                <div style={{ flex: '1', backgroundColor: 'blue', height: '100px' }}></div>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateModal;
