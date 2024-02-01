import { Badge, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { EmojiIcon, MoreIcon } from '../Icon/Icon';
import { Avatar } from '../Layout/Header/Profile';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import CommentMenuPopover from './CommentMenuPopover';
import { useState } from 'react';
import { toast } from 'react-toastify';
import EmojiPopover from './EmojiPopover';
import EditComment from './EditComment';
import { commentRequest } from '~/services/requests';
import { convertCreatedAt } from '~/utils';

const cx = classNames.bind(styles);

function CommentItem({ showMenuButtons, setActiveComment, commentDetail, handleDeleteComment, updateComment }) {
    const [isEditMode, setEditMode] = useState(false);
    const [emojiList, setEmojiList] = useState(commentDetail);
    const [showEmoji, setShowEmoji] = useState(false);
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
                    <OverlayTrigger
                        trigger="click"
                        rootClose
                        placement="bottom"
                        overlay={EmojiPopover(handleAddEmoji)}
                        show={showEmoji}
                        onToggle={() => setShowEmoji((prev) => !prev)}
                    >
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
        if (emojiList && emojiList.emojis)
            return Object.entries(emojiList.emojis).map(([emoji, userIds], index) => (
                <Badge pill className={cx('badge')} key={`emoji-${index}`}>
                    <span>{emoji}</span>
                    <span
                        style={{
                            marginLeft: '6px',
                            color: 'var(--text-secondary)',
                            fontWeight: '300',
                            fontSize: '12px',
                        }}
                    >
                        {userIds.length}
                    </span>
                </Badge>
            ));
    };

    const handleAddEmoji = async (emoji) => {
        const response = await commentRequest.postEmojis({ commentId: commentDetail._id, emoji });
        if (response.status === 200) {
            setEmojiList(response.data);
        }
        setShowEmoji((prev) => !prev);
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
                                <div className={cx('name')}>{commentDetail.authorName}</div>
                                <div className={cx('createdAt')}>{convertCreatedAt(commentDetail.createdAt)}</div>
                                {renderButtons()}
                            </div>
                            <div className={cx('text-content')}>{commentDetail.content}</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderEmojis()}</div>
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
