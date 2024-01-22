import { Icon } from '~/components/Icon';
import styles from './Today.module.scss';
import classNames from 'classnames/bind';
import ListTask from '~/components/ListTask';
import AddTask from '~/components/AddTask';

const cx = classNames.bind(styles);

function Today() {
    return (
        <div>
            <h2>Today</h2>
            <div className={cx('num-task-wrapper')}>
                <Icon.BorderedCheckIcon />
                <div className={cx('num-task')}>9 tasks</div>
            </div>
            <ul>
                <li key={0} style={{ marginTop: '24px' }}>
                    <ListTask />
                </li>
                <li key={1} style={{ marginTop: '24px' }}>
                    <ListTask />
                </li>
                <li key={2} style={{ marginTop: '24px' }}>
                    <ListTask />
                </li>
                <li key={3} style={{ marginTop: '24px' }}>
                    <ListTask />
                </li>
                <li key={4} style={{ marginTop: '24px' }}>
                    <ListTask />
                </li>
            </ul>

            <AddTask />
        </div>
    );
}

export default Today;
