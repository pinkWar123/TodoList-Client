import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    const [showSidebar, toggleSidebar] = useState(false);
    const [active, setActive] = useState(1);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header toggleSidebar={() => toggleSidebar((prev) => !prev)} />
                <AnimatePresence>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {showSidebar && (
                            <motion.div
                                style={{ width: '250px' }}
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%', opacity: 0 }}
                            >
                                <Sidebar active={active} setActive={setActive} />
                            </motion.div>
                        )}
                        {children}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MainLayout;
