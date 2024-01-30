import { Popover } from 'react-bootstrap';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { CopyIcon, DeleteIcon, EditIcon } from '../Icon/Icon';

const cx = classNames.bind(styles);

const topItems = [
    {
        icon: <EditIcon />,
        title: 'Edit',
    },
    {
        icon: <CopyIcon />,
        title: 'Copy comment',
    },
];

const bottomItems = [
    {
        icon: <DeleteIcon />,
        title: 'Delete',
    },
];

function CommentMenuPopover() {
    return (
        <Popover className={cx('menu-wrapper')}>
            <Popover.Body>
                <ul>
                    {topItems.map((item, index) => (
                        <li className={cx('menu-item')} key={`top-${index}`}>
                            {item.icon}
                            <div className={cx('title')}>{item.title}</div>
                        </li>
                    ))}
                </ul>
                <hr />
                <ul>
                    {bottomItems.map((item, index) => (
                        <li className={cx('menu-item')} key={`bottom-${index}`} style={{ color: 'red' }}>
                            {item.icon}
                            <div className={cx('title')}>{item.title}</div>
                        </li>
                    ))}
                </ul>
            </Popover.Body>
        </Popover>
    );
}

export default CommentMenuPopover;
