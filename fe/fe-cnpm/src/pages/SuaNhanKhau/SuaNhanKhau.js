import classNames from 'classnames/bind';
import styles from './SuaNhanKhau.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuaNhanKhau() {
    // render dữ liệu hiện tại của nhân khẩu
    const [people, setPeople] = useState({});
    useEffect(() => {
        const arr = window.location.pathname.split('/');
        const id = arr[arr.length - 1];
        // gọi api
        axios
            .get(`http://localhost:8082/api/v1/nhankhau?id=${id}`)
            .then((res) => {
                setPeople(res.data);
            })
            .catch((err) => console.error(err));
    }, []);
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
            .put(`http://localhost:8082/api/v1/nhankhau`, {
                id: data.id,
                maHoKhau: data.idhokue,
                hoTen: data.name,
                ngaySinh: data.date,
                gioiTinh: data.gioiTinh,
                socmnd: data.cmnd,
                quanHeVoiChuHo: data.quanhevochuho,
                sdt: data.sdt,
                isActive: 1,
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
                <h3 className={cx('heading')}>Sửa thông tin nhân khẩu</h3>
                <div className={cx('form-group')}>
                    <label htmlFor="id" className={cx('form-label')}>
                        ID
                    </label>
                    <input
                        type="text"
                        className={cx('form-control', 'readonly')}
                        id="id"
                        name="id"
                        value={people.id}
                        readOnly
                    />
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
                    <label htmlFor="gioiTinh" className={cx('form-label')}>
                        Giới tính
                    </label>
                    <input type="text" className={cx('form-control')} id="gioiTinh" name="gioiTinh" required />
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

export default SuaNhanKhau;
