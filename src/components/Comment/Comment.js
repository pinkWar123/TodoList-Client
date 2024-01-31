import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Avatar } from '~/components/Layout/Header/Profile';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import { commentRequest } from '~/services/requests';
import CommentList from './CommentList';
import { useAuthContext } from '~/context';
import EditComment from './EditComment';
const cx = classNames.bind(styles);

function Comment({ taskId, ...props }) {
    const { user } = useAuthContext();
    const [editComment, setEditComment] = useState(false);
    const [commentList, setCommentList] = useState([]);

    const handleShowComment = () => setEditComment(true);
    const handleHideComment = () => setEditComment(false);
    const handlePostComment = async (comment) => {
        const data = await commentRequest.postComments({ content: comment, taskId, authorName: user.name });
        if (data) {
            console.log(data);
            setCommentList((prev) => [...prev, data]);
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
            <CommentList commentList={commentList} setCommentList={setCommentList} taskId={taskId} />
            <div className={cx('wrapper')}>
                {!editComment && <Avatar size="30" />}
                {!editComment ? (
                    <div className={cx('comment-wrapper')} onClick={handleShowComment}>
                        <div className={cx('primary-text')}>Comment</div>
                    </div>
                ) : (
                    <EditComment
                        initialValue=""
                        onCancel={handleHideComment}
                        onSubmit={(comment) => handlePostComment(comment)}
                    />
                )}
            </div>
        </>
    );
}

export default Comment;
