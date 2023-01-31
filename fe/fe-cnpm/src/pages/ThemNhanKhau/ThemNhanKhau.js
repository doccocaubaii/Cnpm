import classNames from 'classnames/bind';
import styles from './ThemNhanKhau.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

function ThemNhanKhau() {
    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const inputs = Object.values(formElement.querySelectorAll('input'));
        const data = {};
        inputs.forEach((input) => {
            data[input.name] = input.value;
        });
        // gọi api
        axios
            .post('https://jsonplaceholder.typicode.com/users', {
                data,
                name: 'thành',
                email: 'Thành thật thà',
                website: 'test',
                phone: '123',
            })
            .then((res) => {
                // sửa phần gọi api
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={cx('main')}>
            <form id="create-form" className={cx('form')} onSubmit={handleSubmit}>
                <h3 className={cx('heading')}>Thông tin hộ khẩu</h3>
                <div className={cx('form-group')}>
                    <label htmlFor="id" className={cx('form-label')}>
                        ID
                    </label>
                    <input type="text" className={cx('form-control')} id="id" name="id" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="name" className={cx('form-label')}>
                        Họ và tên
                    </label>
                    <input type="text" className={cx('form-control')} id="name" name="name" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="date" className={cx('form-label')}>
                        Ngày Sinh
                    </label>
                    <input type="text" className={cx('form-control')} id="date" name="date" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="cmnd" className={cx('form-label')}>
                        Số CMND
                    </label>
                    <input type="text" className={cx('form-control')} id="cmnd" name="cmnd" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="sdt" className={cx('form-label')}>
                        SĐT
                    </label>
                    <input type="text" className={cx('form-control')} id="sdt" name="sdt" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="idhokue" className={cx('form-label')}>
                        Mã hộ khẩu
                    </label>
                    <input type="text" className={cx('form-control')} id="idhokue" name="idhokue" required />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="quanhevochuho" className={cx('form-label')}>
                        Quan hệ với chủ hộ
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="quanhevochuho"
                        name="quanhevochuho"
                        required
                    />
                </div>

                <button type="submit" className={cx('btn-submit')}>
                    Thêm nhân khẩu
                </button>
            </form>
        </div>
    );
}

export default ThemNhanKhau;
