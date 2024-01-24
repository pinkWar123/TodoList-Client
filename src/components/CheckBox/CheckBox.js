import { Icon } from '../Icon';
import styles from './CheckBox.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckBox({ ...props }) {
    return (
        <span className={cx('circle')} {...props}>
            <div className={cx('check-icon')}>
                <Icon.CheckIcon />
            </div>
        </span>
    );
}

export default CheckBox;
