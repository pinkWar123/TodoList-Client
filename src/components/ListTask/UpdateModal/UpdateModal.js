import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CheckBox from '~/components/CheckBox';
import Comment from '~/components/Comment';
import CombinedInput from '~/components/NoBorderInput/Inputs';
import useTaskContext from '~/context/TaskContext/TaskConsumer';

function UpdateModal({ show, onHide, index }) {
    const { tasks, setTasks } = useTaskContext();
    const [task, setCurrentTask] = useState(tasks[index]);
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <div>Edit task</div>
            </Modal.Header>
            <div className="d-flex">
                <div style={{ width: '70%' }}>
                    <div className="d-flex">
                        <CheckBox />
                        <CombinedInput
                            taskName={task.taskName}
                            description={task.description}
                            onTaskNameChange={(e) => setCurrentTask((prev) => ({ ...prev, taskName: e.target.value }))}
                            onDescriptionChange={(e) =>
                                setCurrentTask((prev) => ({ ...prev, description: e.target.value }))
                            }
                        />
                    </div>
                    <div style={{ width: '90%', display: 'flex', margin: '0 auto' }}>
                        <Comment />
                    </div>
                </div>
                <div style={{ flex: '1', backgroundColor: 'blue', height: '100px' }}></div>
            </div>
        </Modal>
    );
}

export default UpdateModal;
