import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Avatar } from '~/components/Layout/Header/Profile';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import { commentRequest } from '~/services/requests';
import CommentList from './CommentList';
import { useAuthContext } from '~/context';
const cx = classNames.bind(styles);

function Comment({ taskId, ...props }) {
    const { user } = useAuthContext();
    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState(false);
    const [commentList, setCommentList] = useState([]);

    const handleShowComment = () => setEditComment(true);
    const handleHideComment = () => setEditComment(false);
    const handlePostComment = async () => {
        const data = await commentRequest.postComments({ content: comment, taskId, authorName: user.name });
        if (data) {
            console.log(data);
            setCommentList((prev) => [...prev, data]);
            setComment('');
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            const data = await commentRequest.getComments({ taskId });
            console.log(data);
            if (data) setCommentList(data);
        };
        fetchComments();
    }, [taskId]);
    return (
        <>
            <CommentList commentList={commentList} taskId={taskId} />
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
                            onInput={(e) => setComment(e.target.textContent)}
                        ></div>
                        <div className={cx('btn-row')}>
                            <CancelButton onClick={handleHideComment} />
                            <ConfirmButton title="Comment" onClick={handlePostComment} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Comment;
