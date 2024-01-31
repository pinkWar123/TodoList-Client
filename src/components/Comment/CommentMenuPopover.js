import { Popover } from 'react-bootstrap';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { CopyIcon, DeleteIcon, EditIcon } from '../Icon/Icon';

const cx = classNames.bind(styles);

function CommentMenuPopover({ commentDetail, toggleEditMode, handleCopyComment, handleDeleteComment }) {
    const topItems = [
        {
            icon: <EditIcon />,
            title: 'Edit',
            onClick: toggleEditMode,
        },
        {
            icon: <CopyIcon />,
            title: 'Copy comment',
            onClick: handleCopyComment,
        },
    ];

    const bottomItems = [
        {
            icon: <DeleteIcon />,
            title: 'Delete',
            onClick: handleDeleteComment,
        },
    ];
    return (
        <Popover className={cx('menu-wrapper')}>
            <Popover.Body>
                <ul>
                    {topItems.map((item, index) => (
                        <li className={cx('menu-item')} key={`top-${index}`} onClick={item.onClick}>
                            {item.icon}
                            <div className={cx('title')}>{item.title}</div>
                        </li>
                    ))}
                </ul>
                <hr />
                <ul>
                    {bottomItems.map((item, index) => (
                        <li
                            className={cx('menu-item')}
                            key={`bottom-${index}`}
                            style={{ color: 'red' }}
                            onClick={item.onClick}
                        >
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
