import { useState } from 'react';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import { useEditableRef } from '~/hooks';

const cx = classNames.bind(styles);

function EditComment({ initialValue, onCancel, onSubmit }) {
    const [comment, setComment] = useState(initialValue);
    const { editableRef, clearAndFocusEditableDiv } = useEditableRef(initialValue);
    return (
        <div className={cx('edit-comment-wrapper')}>
            <div
                ref={editableRef}
                contentEditable={true}
                role="textbox"
                aria-multiline
                className={cx('editable')}
                onInput={(e) => setComment(e.target.textContent)}
            ></div>
            <div className={cx('btn-row')}>
                <CancelButton onClick={onCancel} />
                <ConfirmButton
                    title="Comment"
                    onClick={() => {
                        onSubmit(comment);
                        clearAndFocusEditableDiv();
                    }}
                />
            </div>
        </div>
    );
}

export default EditComment;
