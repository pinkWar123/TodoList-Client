import { Button, Container, Nav, NavDropdown, Navbar, NavbarBrand, Offcanvas, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { IconButton } from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ toggleSidebar }) {
    return (
        <Navbar expand={false} className={cx('wrapper')}>
            <Container>
                <IconButton.ToggleButton onClick={toggleSidebar} />
                <NavbarBrand className={`${cx('logo')} me-auto`}>Qlogger</NavbarBrand>
                <IconButton.LightButton />
                <Button variant="secondary">Log out</Button>
            </Container>
        </Navbar>
    );
}

export default Header;
