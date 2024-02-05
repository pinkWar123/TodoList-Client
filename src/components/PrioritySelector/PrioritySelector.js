import { OverlayTrigger } from 'react-bootstrap';
import PriorityContent from './PriorityContent';
import { forwardRef } from 'react';

import styles from './PrioritySelector.module.scss';
import classNames from 'classnames/bind';
import Item from './Item';

const cx = classNames.bind(styles);

const RefDiv = forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props} className={cx('ref-wrapper')}>
            <Item isRefDiv selected priority={props.priority} />
        </div>
    );
});

function PrioritySelector({ priority, handleUpdatePriority }) {
    return (
        <div>
            <OverlayTrigger
                rootClose
                placement="bottom"
                trigger="click"
                overlay={PriorityContent({ priority, handleUpdatePriority })}
            >
                <RefDiv priority={priority} />
            </OverlayTrigger>
        </div>
    );
}

export default PrioritySelector;
