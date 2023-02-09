import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    // redirect to login
    const navigate = useNavigate();

    const handleLogout = (e) => {
        document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        navigate('/');
    };
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
                <Link className={cx('link-btn')} to="/bieu-mau">
                    Biểu mẫu
                </Link>
                <Link className={cx('link-btn')} to="/danh-gia">
                    Đánh giá
                </Link>
                <button className={cx('logout-btn')} onClick={handleLogout}>
                    Đăng xuất
                </button>
            </div>
        </header>
    );
}

export default Header;
