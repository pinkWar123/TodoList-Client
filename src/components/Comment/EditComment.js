import { useState } from 'react';
import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { CancelButton, ConfirmButton } from '../Button/TextButton';
import { useEditableRef } from '~/hooks';
import Input from '../NoBorderInput/Inputs';

const cx = classNames.bind(styles);

function EditComment({ initialValue, onCancel, onSubmit, confirmTitle = 'Comment' }) {
    const [comment, setComment] = useState(initialValue);
    const { editableRef, clearAndFocusEditableDiv } = useEditableRef(initialValue);
    return (
        <div className={cx('edit-comment-wrapper')}>
            <Input ref={editableRef} setValue={setComment} placeholder="Comment" clear={true} />

            <div className={cx('btn-row')}>
                <CancelButton onClick={onCancel} />
                <ConfirmButton
                    disabled={comment === ''}
                    title={confirmTitle}
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
