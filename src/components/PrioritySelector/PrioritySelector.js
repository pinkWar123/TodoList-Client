import { OverlayTrigger } from 'react-bootstrap';
import PriorityContent from './PriorityContent';
import { forwardRef, useEffect, useState } from 'react';

import styles from './PrioritySelector.module.scss';
import classNames from 'classnames/bind';
import Item from './Item';
import { priorityRequest } from '~/services/requests';

const cx = classNames.bind(styles);

const RefDiv = forwardRef((props, ref) => {
    return (
        <div ref={ref} {...props} className={cx('ref-wrapper')}>
            <Item isRefDiv selected priority={props.priority} />
        </div>
    );
});

function PrioritySelector({ task }) {
    return (
        <div>
            <div>Priority</div>
            <OverlayTrigger rootClose placement="bottom" trigger="click" overlay={PriorityContent({ task })}>
                <RefDiv priority={task.priority} />
            </OverlayTrigger>
        </div>
    );
}

export default PrioritySelector;
