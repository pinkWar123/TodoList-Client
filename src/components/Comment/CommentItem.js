import { Badge, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { EmojiIcon, MoreIcon } from '../Icon/Icon';
import { Avatar } from '../Layout/Header/Profile';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import CommentMenuPopover from './CommentMenuPopover';
import { useState } from 'react';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import { commentRequest } from '~/services/requests';
import { toast } from 'react-toastify';
import EmojiPopover from './EmojiPopover';
import EditComment from './EditComment';

const cx = classNames.bind(styles);

// function EditComment({ value, toggleEditMode, commentId, setCommentList }) {
//     const [comment, setComment] = useState(value);
//     const handleUpdateComment = async () => {
//         const response = await commentRequest.editComment({ content: comment, commentId });
//         if (response.status === 200) {
//             setCommentList(comment);
//             toggleEditMode();
//         }
//     };
//     return (
//         <div className="w-100">
//             <Form.Control
//                 className={cx('border')}
//                 autoFocus
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//             ></Form.Control>
//             <div className={cx('btn-row')}>
//                 <CancelButton onClick={toggleEditMode} />
//                 <ConfirmButton title="Update" onClick={handleUpdateComment} />
//             </div>
//         </div>
//     );
// }

function CommentItem({
    showMenuButtons,
    setActiveComment,
    name,
    createdAt,
    commentDetail,
    handleDeleteComment,
    updateComment,
}) {
    const [isEditMode, setEditMode] = useState(false);
    const [emojiList, setEmojiList] = useState([]);

    const toggleEditMode = () => {
        setEditMode((prev) => !prev);
    };
    const handleCopyComment = async () => {
        try {
            await navigator.clipboard.writeText(commentDetail.content);
            toast.success('Copy comment successfully');
        } catch (e) {
            toast.error('Failed to copy comment');
        }
    };

    const renderButtons = () => {
        return (
            <div className={`ms-auto ${cx('icon', { show: showMenuButtons })}`} onClick={setActiveComment}>
                <div>
                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={EmojiPopover()}>
                        <EmojiIcon />
                    </OverlayTrigger>
                </div>

                <div>
                    <OverlayTrigger
                        rootClose
                        trigger="click"
                        placement="bottom"
                        overlay={CommentMenuPopover({
                            commentDetail,
                            toggleEditMode,
                            handleCopyComment,
                            handleDeleteComment,
                        })}
                    >
                        <MoreIcon />
                    </OverlayTrigger>
                </div>
            </div>
        );
    };

    const renderEmojis = () => {
        return (
            <>
                <Badge pill className={cx('badge')}>
                    <span>😀</span>
                    <span
                        style={{
                            marginLeft: '6px',
                            color: 'var(--text-secondary)',
                            fontWeight: '300',
                            fontSize: '12px',
                        }}
                    >
                        1
                    </span>
                </Badge>
            </>
        );
    };

    return (
        <div className={cx('comment-item--wrapper')}>
            {!isEditMode ? (
                <>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Avatar size="30" />
                        </div>
                        <div className={cx('content')}>
                            <div className="d-flex" style={{ width: '100%', textAlign: 'center', height: '30px' }}>
                                <div className={cx('name')}>{name}</div>
                                <div className={cx('createdAt')}>{createdAt}</div>
                                {renderButtons()}
                            </div>
                            <div className={cx('text-content')}>{commentDetail.content}</div>
                            <div style={{ display: 'flex' }}>{renderEmojis()}</div>
                        </div>
                    </div>
                </>
            ) : (
                <EditComment
                    initialValue={commentDetail.content}
                    onCancel={toggleEditMode}
                    onSubmit={(value) => {
                        updateComment(value);
                        toggleEditMode();
                    }}
                />
            )}
        </div>
    );
}

export default CommentItem;
