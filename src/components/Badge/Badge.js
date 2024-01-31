import styles from './Badge.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Badge({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Badge;
