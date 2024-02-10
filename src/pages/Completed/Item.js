import { Avatar } from '~/components/Layout/Header/Profile';
import { convertCompletedAt } from '~/utils';

import styles from './Completed.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Item({ taskName, completedAt }) {
    return (
        <>
            <div className="d-flex" style={{ height: '50px' }}>
                <Avatar size="50" />
                <div style={{ marginLeft: '16px' }}>
                    <p>You completed a task: {taskName}</p>
                    <h6 className={cx('completed')}>{convertCompletedAt(completedAt)}</h6>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Item;
