import styles from './Comment.module.scss';
import classNames from 'classnames/bind';
import { FloatingLabel, Form } from 'react-bootstrap';

import { Avatar } from '~/components/Layout/Header/Profile';
const cx = classNames.bind(styles);

function Comment({ ...props }) {
    return (
        <div className={cx('wrapper')}>
            <Avatar />
            <div>
                <Form.Control placeholder="Comment" className={cx('input')} />
            </div>
        </div>
    );
}

export default Comment;
