import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className="container">
                <Link className={cx('link-btn')} to="/nhan-khau">
                    Nhân Khẩu
                </Link>
                <Link className={cx('link-btn')} to="/ho-khau">
                    Hộ Khẩu
                </Link>
                <Link className={cx('link-btn')}>Thống kê</Link>
                <Link className={cx('link-btn')} to="/sinh-hoat">
                    Sinh Hoạt
                </Link>
            </div>
        </header>
    );
}

export default Header;
