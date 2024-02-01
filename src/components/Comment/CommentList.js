import { useState } from 'react';
import CommentItem from './CommentItem';
import { commentRequest } from '~/services/requests';

function CommentList({ commentList, setCommentList, taskId }) {
    const [activeComment, setActiveComment] = useState(-1);
    const handleDeleteComment = async (index) => {
        const response = await commentRequest.deleteComment({ taskId, commentId: commentList[index]._id });
        if (response && response.status === 200) {
            setCommentList((prev) => prev.filter((item, _index) => _index !== index));
        }
    };
    return (
        <ul>
            {commentList.map((comment, index) => (
                <li key={comment._id}>
                    <CommentItem
                        name="Quan"
                        content={comment.content}
                        createdAt="Today 7:14 PM"
                        showMenuButtons={activeComment === index}
                        setActiveComment={() => setActiveComment(index)}
                        commentDetail={comment}
                        handleDeleteComment={() => handleDeleteComment(index)}
                        updateComment={(value) =>
                            setCommentList((prev) =>
                                prev.map((comment, _index) => {
                                    if (_index === index) {
                                        comment.content = value;
                                        return comment;
                                    } else return comment;
                                }),
                            )
                        }
                    />
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
