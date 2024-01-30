import { OverlayTrigger } from 'react-bootstrap';
import { MoreIcon } from '../Icon/Icon';
import { Avatar } from '../Layout/Header/Profile';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import CommentMenuPopover from './CommentMenuPopover';

const cx = classNames.bind(styles);

function CommentItem({ showMenuButtons, setActiveComment, name, createdAt, content }) {
    return (
        <div className={cx('comment-item--wrapper')}>
            <div>
                <Avatar size="30" />
            </div>
            <div className={cx('content')}>
                <div className="d-flex" style={{ width: '100%', textAlign: 'center', height: '30px' }}>
                    <div className={cx('name')}>{name}</div>
                    <div className={cx('createdAt')}>{createdAt}</div>
                    <div className={`ms-auto ${cx('icon', { show: showMenuButtons })}`} onClick={setActiveComment}>
                        <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={CommentMenuPopover()}>
                            <MoreIcon />
                        </OverlayTrigger>
                    </div>
                </div>
                <div className={cx('text-content')}>{content}</div>
            </div>
        </div>
    );
}

export default CommentItem;
