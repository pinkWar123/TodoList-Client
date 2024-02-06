import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import items from './items';
import { cloneElement, useState } from 'react';
import AddTaskModal from '~/components/AddTask/AddTaskModal';
import { AddIcon } from '~/components/Icon/Icon';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const isActive = (index, active) => index === active;

function Item({ index, item, active, onClick }) {
    return (
        <li
            key={index}
            className={cx('item', { active })}
            onClick={() => {
                onClick(index);
            }}
        >
            <div style={{ marginLeft: '12px' }}>
                {cloneElement(item.icon, {
                    fill: isActive(index, active) ? 'var(--product-library-navbar-on-selected-tint)' : 'currentColor',
                })}
            </div>
            <div style={{ marginLeft: '18px' }}>
                <span className={cx('text', { active })}>{item.title}</span>
            </div>
        </li>
    );
}

function Sidebar({ active, setActive }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const toggleAddModal = () => setShowAddModal((prev) => !prev);

    return (
        <>
            <div className={cx('wrapper')} initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}>
                <ul style={{ padding: '0' }}>
                    <Item
                        index="Add task"
                        item={{
                            icon: <AddIcon />,
                            title: 'Add task',
                        }}
                        onClick={toggleAddModal}
                    />
                    {items.map((item, index) => (
                        <Link to={item.to} style={{ textDecoration: 'none' }}>
                            <Item
                                index={index}
                                item={item}
                                active={index === active}
                                onClick={() => setActive(index)}
                            />
                        </Link>
                    ))}
                </ul>
            </div>
            <AddTaskModal show={showAddModal} onHide={() => setShowAddModal((prev) => !prev)} />
        </>
    );
}

export default Sidebar;
