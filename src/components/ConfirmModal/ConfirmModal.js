import { Modal } from 'react-bootstrap';
import { CancelButton, ConfirmButton } from '../Button/TextButton';

function ConfirmModal({ header, body, show, onHide, onConfirm, cancelTitle, confirmTitle }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>{header}</Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <CancelButton onClick={onHide} title={cancelTitle} />
                <ConfirmButton onClick={onConfirm} title={confirmTitle} />
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;
