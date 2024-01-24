import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Avatar } from '~/components/Layout/Header/Profile';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
const cx = classNames.bind(styles);

function Comment({ ...props }) {
    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState(false);
    const handleShowComment = () => setEditComment(true);
    const handleHideComment = () => setEditComment(false);
    return (
        <>
            <div className={cx('wrapper')}>
                {!editComment && <Avatar size="30" />}
                {!editComment ? (
                    <div className={cx('comment-wrapper')} onClick={handleShowComment}>
                        <div className={cx('primary-text')}>Comment</div>
                    </div>
                ) : (
                    <div className={cx('edit-comment-wrapper')}>
                        <div
                            contentEditable={true}
                            role="textbox"
                            aria-multiline
                            className={cx('editable')}
                            style={{ outline: 'none' }}
                            onInput={(e) => setComment(e.target.textContent)}
                        ></div>
                        <div className={cx('btn-row')}>
                            <CancelButton onClick={handleHideComment} />
                            <ConfirmButton title="Comment" onClick={handleHideComment} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Comment;
