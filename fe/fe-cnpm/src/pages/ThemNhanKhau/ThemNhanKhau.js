import classNames from 'classnames/bind';
import styles from './ThemNhanKhau.module.scss';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ThemNhanKhau() {
    //state onchange input
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [gioTinh, setGioTinh] = useState('');
    const [cmnd, setCmnd] = useState('');
    const [sdt, setSdt] = useState('');
    const [idHokue, setIdHokue] = useState('');
    const [address, setAddress] = useState('');
    const [quanHeVoiChuHo, setQuanHeVoiChuHo] = useState('');

    // function onchange two ways binding
    const onChangeName = (e) => setName(e.target.value);
    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeGioTinh = (e) => setGioTinh(e.target.value);
    const onChangeCmnd = (e) => setCmnd(e.target.value);
    const onChangeSdt = (e) => setSdt(e.target.value);
    const onChangeIdHokue = (e) => setIdHokue(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);
    const onChangeQuanHeVoiChuHo = (e) => setQuanHeVoiChuHo(e.target.value);
    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (gioTinh === 'chọn giới tính' || gioTinh === '') {
            toast.error('yêu cầu chọn giới tính', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            axios
                .post('http://localhost:8082/api/v1/nhankhau', {
                    maHoKhau: idHokue,
                    hoTen: name,
                    ngaySinh: date,
                    gioiTinh: gioTinh,
                    socmnd: cmnd,
                    quanHeVoiChuHo: quanHeVoiChuHo,
                    sdt: sdt,
                    diaChiHienNay: address,
                    isActive: 1,
                })
                .then((res) => {
                    toast.success(' Thành công!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'colored',
                    });
                    setName('');
                    setDate('');
                    setGioTinh('');
                    setCmnd('');
                    setSdt('');
                    setIdHokue('');
                    setAddress('');
                    setQuanHeVoiChuHo('');
                })
                .catch((err) => {
                    toast.error('Không thành công', {
                        position: 'top-right',
                        autoClose: 5000,
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

    return (
        <div className={cx('main')}>
            <form id="create-form" className={cx('form')} onSubmit={handleSubmit}>
                <h3 className={cx('heading')}>Thông tin nhân khẩu</h3>

                <div className={cx('form-group')}>
                    <label htmlFor="name" className={cx('form-label')}>
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="name"
                        name="name"
                        value={name}
                        onChange={onChangeName}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="date" className={cx('form-label')}>
                        Ngày Sinh
                    </label>
                    <input
                        type="date"
                        className={cx('form-control')}
                        id="date"
                        name="date"
                        value={date}
                        onChange={onChangeDate}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="gioTinh" className={cx('form-label')}>
                        Giới tính
                    </label>
                    <select
                        className={cx('form-control')}
                        id="gioTinh"
                        name="gioTinh"
                        value={gioTinh}
                        onChange={onChangeGioTinh}
                        required
                    >
                        <option value="chọn giới tính">Chọn giới tính</option>
                        <option value="nam">Nam</option>
                        <option value="nữ">Nữ</option>
                        <option value="khác">Khác</option>
                    </select>
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="cmnd" className={cx('form-label')}>
                        Số CMND
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="cmnd"
                        name="cmnd"
                        value={cmnd}
                        onChange={onChangeCmnd}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="sdt" className={cx('form-label')}>
                        SĐT
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="sdt"
                        name="sdt"
                        value={sdt}
                        onChange={onChangeSdt}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="idhokue" className={cx('form-label')}>
                        Mã hộ khẩu
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="idhokue"
                        name="idhokue"
                        value={idHokue}
                        onChange={onChangeIdHokue}
                        required
                    />
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="address" className={cx('form-label')}>
                        Địa chỉ hiện nay
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

                <div className={cx('form-group')}>
                    <label htmlFor="quanhevochuho" className={cx('form-label')}>
                        Quan hệ với chủ hộ
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="quanhevochuho"
                        name="quanhevochuho"
                        value={quanHeVoiChuHo}
                        onChange={onChangeQuanHeVoiChuHo}
                        required
                    />
                </div>

                <button type="submit" className={cx('btn-submit')}>
                    Thêm nhân khẩu
                </button>
            </form>

            <ToastContainer />
        </div>
    );
}

export default ThemNhanKhau;
