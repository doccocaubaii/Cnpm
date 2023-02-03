import classNames from 'classnames/bind';
import styles from './ThemHoKhau.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ThemHoKhau() {
    //hande seach chủ hộ
    const handleSearchHouseholder = (e) => {
        const inputValue = document.getElementById('maChuHo').value.trim();
        if (inputValue) {
            // gọi api
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${inputValue}`)
                .then((res) => {
                    document.getElementById('name').value = res.data.name;
                    document.getElementById('date').value = res.data.website;
                    document.getElementById('cmnd').value = res.data.email;
                    document.getElementById('sdt').value = res.data.phone;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
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
                <div className={cx('wrapper')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="id" className={cx('form-label')}>
                            Mã hộ khẩu
                        </label>
                        <input type="text" className={cx('form-control')} id="id" name="id" required />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="address" className={cx('form-label')}>
                            Địa chỉ
                        </label>
                        <input type="text" className={cx('form-control')} id="address" name="address" required />
                    </div>
                </div>
                <h3 className={cx('heading')}>Thông tin chủ hộ</h3>
                <div className={cx('wrapper')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="maChuHo" className={cx('form-label')}>
                            Mã chủ hộ
                        </label>
                        <div className={cx('search-chuho')}>
                            <input
                                type="text"
                                className={cx('form-control-search')}
                                id="maChuHo"
                                name="maChuHo"
                                required
                            />
                            <button className={cx('icon-search')} onClick={handleSearchHouseholder}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="name" className={cx('form-label')}>
                            Tên chủ hộ
                        </label>
                        <input type="text" className={cx('form-control', 'readonly')} id="name" name="name" readOnly />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="date" className={cx('form-label')}>
                            Ngày Sinh
                        </label>
                        <input type="text" className={cx('form-control', 'readonly')} id="date" name="date" readOnly />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="cmnd" className={cx('form-label')}>
                            Số CMND
                        </label>
                        <input type="text" className={cx('form-control', 'readonly')} id="cmnd" name="cmnd" readOnly />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="sdt" className={cx('form-label')}>
                            SĐT
                        </label>
                        <input type="text" className={cx('form-control', 'readonly')} id="sdt" name="sdt" readOnly />
                    </div>
                </div>

                <button type="submit" className={cx('btn-submit')}>
                    Thêm hộ khẩu
                </button>
            </form>
        </div>
    );
}

export default ThemHoKhau;
