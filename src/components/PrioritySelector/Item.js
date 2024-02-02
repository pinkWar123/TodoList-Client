import { CheckIcon, FlagIcon } from '../Icon/Icon';
import styles from './PrioritySelector.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Item = ({ priority, selected, isRefDiv = false, onClick }) => {
    const getColor = (priority) => `var(--p${priority}-color)`;
    return (
        <div className={cx('item-wrapper')} onClick={onClick}>
            <div className="d-flex" style={{ marginLeft: '4px' }}>
                <div>
                    <FlagIcon fill={getColor(priority)} />
                </div>
                <div style={{ marginLeft: '6px' }}>
                    {isRefDiv ? 'Priority ' : 'P'}
                    {priority}
                </div>
            </div>
            {selected && (
                <div style={{ marginRight: '4px' }}>
                    <CheckIcon fill={getColor(priority)} />
                </div>
            )}
        </div>
    );
};
export default Item;
