import { Button, Container, Nav, NavDropdown, Navbar, NavbarBrand, Offcanvas, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { IconButton } from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const expand = 'lg';
    return (
        <Navbar expand={false} className={cx('wrapper')}>
            <Container>
                <IconButton.ToggleButton />
                <NavbarBrand className={`${cx('logo')} me-auto`}>Qlogger</NavbarBrand>
                <Form className="d-flex" style={{ float: 'left' }}>
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;
