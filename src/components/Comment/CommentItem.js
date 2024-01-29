import { Avatar } from '../Layout/Header/Profile';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CommentItem({ name, createdAt, content }) {
    return (
        <div className={cx('comment-item--wrapper')}>
            <div>
                <Avatar size="30" />
            </div>
            <div className={cx('content')}>
                <div>
                    <span className={cx('name')}>{name}</span>
                    <span className={cx('createdAt')}>{createdAt}</span>
                </div>
                <div className={cx('text-content')}>{content}</div>
            </div>
        </div>
    );
}

export default CommentItem;
