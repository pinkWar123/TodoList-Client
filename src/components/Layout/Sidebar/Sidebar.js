import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Sidebar({ show }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div className={cx('wrapper')} initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}>
                    Hello
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Sidebar;
