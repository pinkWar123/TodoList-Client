import { Button } from 'react-bootstrap';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CancelButton = ({ title = 'Cancel', ...props }) => {
    return (
        <Button variant="light" className={cx('btn')} {...props}>
            <span className={cx('btn-text')}>{title}</span>
        </Button>
    );
};

const ConfirmButton = ({ title, ...props }) => {
    return (
        <Button variant="danger" className={cx('btn')} {...props}>
            <span className={cx('btn-text')}>{title}</span>
        </Button>
    );
};

export { ConfirmButton, CancelButton };
