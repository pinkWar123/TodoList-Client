import CommentItem from './CommentItem';

function CommentList({ commentList }) {
    return (
        <ul>
            {commentList.map((comment, index) => (
                <li key={index}>
                    <CommentItem name="Quan" content={comment.content} createdAt="Today 7:14 PM" />
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
