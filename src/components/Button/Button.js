import { Button } from 'react-bootstrap';
import { Icon } from '../Icon';

export const FacebookButton = ({ onClick, ...props }) => {
    return (
        <Button
            className="w-100"
            style={{ backgroundColor: 'var(--fb-logo)', display: 'flex', justifyContent: 'center' }}
            onClick={onClick}
            {...props}
        >
            <span style={{ fontSize: '12px' }}>Sign in with facebook</span>
            <Icon.FacebookIcon style={{ marginTop: '2px', marginLeft: '8px' }} />
        </Button>
    );
};

export const GoogleButton = ({ onClick, ...props }) => {
    return (
        <Button
            className="w-100"
            style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}
            onClick={onClick}
            {...props}
        >
            <span style={{ color: 'black', fontSize: '12px' }}>Sign in with google</span>
            <Icon.GoogleIcon style={{ marginTop: '2px', marginLeft: '8px' }} />
        </Button>
    );
};
