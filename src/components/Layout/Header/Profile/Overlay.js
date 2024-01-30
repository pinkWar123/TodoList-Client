import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Button, Modal, Popover } from 'react-bootstrap';
import { Icon } from '~/components/Icon';
import { useNavigate } from 'react-router-dom';
import { CancelButton, ConfirmButton } from '~/components/Button/TextButton';

const cx = classNames.bind(styles);

function Overlay({ profile }) {
    const navigate = useNavigate();
    const [showExitModal, setExitModal] = useState(false);
    const handleClose = () => setExitModal(false);
    const handleLogOut = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
    };
    return (
        <div>
            <Popover id="popover" className={cx('overlay-wrapper')}>
                <Button variant="light" className={cx('btn')}>
                    <img src="https://placehold.co/20" alt="avatar" className={cx('placeholder-img')} />
                    <div className={cx('title')}>{profile.name}</div>
                </Button>
                <Button variant="light" className={cx('btn')} onClick={handleLogOut}>
                    <Icon.LogoutIcon />
                    <div className={cx('title')}>Logout</div>
                </Button>
            </Popover>
            <Modal show={showExitModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log out</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to leave?</Modal.Body>
                <Modal.Footer>
                    <CancelButton />
                    <ConfirmButton title="Yes" />
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Overlay;
