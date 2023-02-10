import classNames from 'classnames/bind';
import styles from './ThemHoKhau.module.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function ThemHoKhau() {
    // state two ways binding input not readonly
    const [idHukou, setIdHukou] = useState('');
    const [address, setAddress] = useState('');
    const [idChuHo, setIdChuHo] = useState('');

    // function handle onchange input
    const onChangeIdHukou = (e) => setIdHukou(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);
    const onChangeIdChuHo = (e) => setIdChuHo(e.target.value);

    //hande seach chủ hộ
    const handleSearchHouseholder = (e) => {
        e.preventDefault();
        const inputValue = idChuHo.trim();
        if (inputValue) {
            // gọi api
            axios
                .get(`http://localhost:8082/api/v1/nhankhau?id=${inputValue}`)
                .then((res) => {
                    document.getElementById('name').value = res.data.hoTen;
                    document.getElementById('date').value = res.data.ngaySinh;
                    document.getElementById('cmnd').value = res.data.socmnd;
                    document.getElementById('sdt').value = res.data.sdt;
                })
                .catch((err) => {
                    toast.error('không tìm thấy nhân khẩu', {
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
        }
    };
    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        // gọi api
        axios
            .post('http://localhost:8082/api/v1/hokhau', {
                maHoKhau: idHukou,
                idChuHo: idChuHo,
                diaChi: address,
                score: 0,
                isActive: 1,
            })
            .then((res) => {
                toast.success('Thành công', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
                setIdHukou('');
                setAddress('');
                setIdChuHo('');
                console.log(res.data);
            })
            .catch((err) => {
                toast.error('Thất bại', {
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
                <h3 className={cx('heading')}>Thông tin hộ khẩu</h3>
                <div className={cx('wrapper')}>
                    <div className={cx('form-group')}>
                        <label htmlFor="idHukou" className={cx('form-label')}>
                            Mã hộ khẩu
                        </label>
                        <input
                            type="text"
                            className={cx('form-control')}
                            id="idHukou"
                            name="idHukou"
                            value={idHukou}
                            onChange={onChangeIdHukou}
                            required
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
                            value={address}
                            onChange={onChangeAddress}
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
                        <div className={cx('search-chuho')}>
                            <input
                                type="text"
                                className={cx('form-control-search')}
                                id="maChuHo"
                                name="maChuHo"
                                value={idChuHo}
                                onChange={onChangeIdChuHo}
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
            <ToastContainer />
        </div>
    );
}

export default ThemHoKhau;
