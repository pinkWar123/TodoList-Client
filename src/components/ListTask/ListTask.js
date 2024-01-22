import { Icon } from '../Icon';
import styles from './ListTask.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ListTask() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('drag-icon')}>
                <Icon.DragIcon />
            </div>
            <span className={cx('circle')}>
                <div className={cx('check-icon')}>
                    <Icon.CheckIcon />
                </div>
            </span>
            <div className={cx('main-content')}>
                <div className={cx('first-row')}>
                    <div className={cx('title')}>Title</div>
                    <div className={cx('first-row-icon')}>
                        <Icon.EditIcon />
                        <Icon.SetDayIcon />
                        <Icon.CommentIcon />
                        <Icon.MoreIcon />
                    </div>
                </div>
                <div className={cx('desc')}>Description</div>
            </div>
        </div>
    );
}

export default ListTask;
