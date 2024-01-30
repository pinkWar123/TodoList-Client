import { useState } from 'react';
import CommentItem from './CommentItem';

function CommentList({ commentList }) {
    const [activeComment, setActiveComment] = useState(-1);
    return (
        <ul>
            {commentList.map((comment, index) => (
                <li key={index}>
                    <CommentItem
                        name="Quan"
                        content={comment.content}
                        createdAt="Today 7:14 PM"
                        showMenuButtons={activeComment === index}
                        setActiveComment={() => setActiveComment(index)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
