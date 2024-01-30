import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { OverlayTrigger } from 'react-bootstrap';
import Overlay from './Overlay';
import { useAuthContext } from '~/context';

const cx = classNames.bind(styles);

function Avatar({ size = '40', ...props }) {
    return <img src={`https://placehold.co/${size}`} alt="avatar" className={cx('placeholder-img')} {...props} />;
}

function Profile() {
    const { user } = useAuthContext();
    return (
        <div className={cx('wrapper')}>
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                    <div>
                        <Overlay profile={user} />
                    </div>
                }
            >
                <img src={`https://placehold.co/${40}`} alt="avatar" className={cx('placeholder-img')} />
            </OverlayTrigger>
        </div>
    );
}

export default Profile;
export { Avatar };
