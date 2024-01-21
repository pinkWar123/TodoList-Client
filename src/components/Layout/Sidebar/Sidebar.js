import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Sidebar({ show }) {
    return (
        <div className={cx('wrapper')} initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}>
            Hello
        </div>
    );
}

export default Sidebar;
