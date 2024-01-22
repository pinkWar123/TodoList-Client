import styles from './MainContainer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainContainer({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default MainContainer;
