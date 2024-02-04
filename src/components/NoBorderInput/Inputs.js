import styles from './NoBorderInput.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Input = forwardRef(({ setValue, clear, initialValue, placeholder, primary, ...props }, ref) => {
    return (
        <div
            defaultValue={initialValue}
            ref={ref}
            placeholder={placeholder}
            contentEditable={true}
            role="textbox"
            aria-multiline
            className={`${cx('editable', {
                primary,
            })} ${props.className}`}
            onInput={(e) => setValue(e.target.textContent)}
            {...props}
        ></div>
    );
});

export default Input;
