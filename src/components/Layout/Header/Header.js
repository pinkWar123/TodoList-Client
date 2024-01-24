import { Button, Container, Nav, NavDropdown, Navbar, NavbarBrand, Offcanvas, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Profile from './Profile';
import { ToggleButton, LightButton } from '~/components/Button/IconButton';

const cx = classNames.bind(styles);

function Header({ toggleSidebar }) {
    return (
        <Navbar expand={false} className={cx('wrapper')}>
            <Container>
                <ToggleButton onClick={toggleSidebar} />
                <NavbarBrand className={`${cx('logo')} me-auto`}>Qlogger</NavbarBrand>
                <LightButton />
                <Profile />
            </Container>
        </Navbar>
    );
}

export default Header;
