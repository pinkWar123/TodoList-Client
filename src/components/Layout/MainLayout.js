import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Offcanvas } from 'react-bootstrap';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    const [showSidebar, toggleSidebar] = useState(false);
    const [showOffcanvas, toggleOffcanvas] = useState(false);
    const [active, setActive] = useState(1);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header
                    toggleSidebar={() => {
                        if (window.innerWidth < 768) toggleOffcanvas((prev) => !prev);
                        else toggleSidebar((prev) => !prev);
                    }}
                />
                <AnimatePresence>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {showSidebar && (
                            <motion.div
                                className={cx('sidebar')}
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%', opacity: 0 }}
                            >
                                <Sidebar active={active} setActive={setActive} />
                            </motion.div>
                        )}
                        <div style={{ width: '10%' }}>
                            <Offcanvas
                                show={showOffcanvas}
                                onHide={() => toggleOffcanvas(false)}
                                backdrop={false}
                                className={cx('offcanvas')}
                            >
                                <Offcanvas.Header closeButton />
                                <Sidebar active={active} setActive={setActive} />
                            </Offcanvas>
                        </div>
                        <div className={cx('main-content', { noSidebar: !showSidebar })}>{children}</div>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MainLayout;
