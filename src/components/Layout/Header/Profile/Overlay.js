import { useAuthContext } from '~/context';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { profileRequest } from '~/services/requests';
import { Button, Modal, Popover, PopoverBody, PopoverHeader } from 'react-bootstrap';
import { Icon } from '~/components/Icon';
import { useNavigate } from 'react-router-dom';

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
                <Button variant="light" className={cx('btn')} onClick={() => setExitModal(true)}>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogOut}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Overlay;
