import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import items from './items';
import { cloneElement } from 'react';

const cx = classNames.bind(styles);

function Sidebar({ active, setActive }) {
    return (
        <div className={cx('wrapper')} initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}>
            <ul style={{ padding: '0' }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={cx('item', { active: index === 0 || index === active })}
                        onClick={() => setActive(index)}
                    >
                        <div style={{ marginLeft: '12px' }}>
                            {cloneElement(item.icon, {
                                fill:
                                    active === index || index === 0
                                        ? 'var(--product-library-navbar-on-selected-tint)'
                                        : 'currentColor',
                            })}
                        </div>
                        <div style={{ marginLeft: '18px' }}>
                            <span className={cx('text', { active: index === 0 || index === active })}>
                                {item.title}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
