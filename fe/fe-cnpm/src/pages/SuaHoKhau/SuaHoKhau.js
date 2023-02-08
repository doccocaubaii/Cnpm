import classNames from 'classnames/bind';
import styles from './SuaHoKhau.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuaHoKhau() {
    // chuyển hướng tranng
    const navigate = useNavigate();

    // render dữ liệu hiện tại của nhân khẩu
    const [hekou, setHekou] = useState({}); // lưu giữ trạng thái hộ khẩu
    const [people, setPeople] = useState({}); // lưu  giữ trạng thái của chủ hộ
    const [inputValue, setInputValue] = useState(''); // two way binding cho input địa chỉ hộ khẩu

    useEffect(() => {
        const arr = window.location.pathname.split('/');
        const id = arr[arr.length - 1];
        // gọi api
        axios
            .get(`http://localhost:8082/api/v1/hokhau?id=${id}`)
            .then((res) => {
                setHekou(res.data);
                setInputValue(res.data.diaChi);
                getChuHo(res.data.idChuHo);
            })
            .catch((err) => {
                toast.error('có lỗi xảy ra', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                console.log(err);
            });
    }, []);

    // lấy dữ liệu của chủ hộ
    const getChuHo = (idChuHo) => {
        axios
            .get(`http://localhost:8082/api/v1/nhankhau?id=${idChuHo}`)
            .then((res) => setPeople(res.data))
            .catch((err) => {
                toast.error('có lỗi xảy ra', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                console.log(err);
            });
    };

    // handle onchang input
    const handleOnchange = (e) => {
        setInputValue(e.target.value);
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // gọi api
        axios
            .put(`http://localhost:8082/api/v1/hokhau`, {
                id: hekou.id,
                maHoKhau: hekou.maHoKhau,
                idChuHo: hekou.idChuHo,
                diaChi: inputValue,
                score: 1,
                isActive: 1,
            })
            .then((res) => {
                navigate('/ho-khau');
            })
            .catch((err) => {
                toast.error('sửa thất bại', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                console.log(err);
            });
    };
    return (
        <div className={cx('main')}>
            <form id="create-form" className={cx('form')} onSubmit={handleSubmit}>
                <h3 className={cx('heading')}>Sửa thông tin hộ khẩu</h3>
                <div className={cx('wrapper')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="id" className={cx('form-label')}>
                            Mã hộ khẩu
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="id"
                            name="id"
                            value={hekou.id}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="address" className={cx('form-label')}>
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            id="address"
                            name="address"
                            value={inputValue}
                            onChange={handleOnchange}
                            required
                        />
                    </div>
                </div>
                <h3 className={cx('heading')}>Thông tin chủ hộ</h3>
                <div className={cx('wrapper')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="maChuHo" className={cx('form-label')}>
                            Mã chủ hộ
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="maChuHo"
                            name="maChuHo"
                            value={people.id}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="name" className={cx('form-label')}>
                            Tên chủ hộ
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="name"
                            name="name"
                            value={people.hoTen}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="date" className={cx('form-label')}>
                            Ngày Sinh
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="date"
                            name="date"
                            value={people.ngaySinh}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="cmnd" className={cx('form-label')}>
                            Số CMND
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="cmnd"
                            name="cmnd"
                            value={people.socmnd}
                            readOnly
                        />
                    </div>

                    <div className={cx('form-group')}>
                        <label htmlFor="sdt" className={cx('form-label')}>
                            SĐT
                        </label>
                        <input
                            type="text"
                            className={cx('form-control', 'readonly')}
                            id="sdt"
                            name="sdt"
                            value={people.sdt}
                            readOnly
                        />
                    </div>
                </div>

                <button type="submit" className={cx('btn-submit')}>
                    cập nhật
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SuaHoKhau;
