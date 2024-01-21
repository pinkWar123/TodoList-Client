import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    const [showSidebar, toggleSidebar] = useState(false);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header toggleSidebar={() => toggleSidebar((prev) => !prev)} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Sidebar show={showSidebar} />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
