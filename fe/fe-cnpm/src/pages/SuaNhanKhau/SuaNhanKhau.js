import classNames from 'classnames/bind';
import styles from './SuaNhanKhau.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuaNhanKhau() {
    const navigate = useNavigate();
    //state onchange input
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [cmnd, setCmnd] = useState('');
    const [sdt, setSdt] = useState('');
    const [idHokue, setIdHokue] = useState('');
    const [address, setAddress] = useState('');
    const [quanHeVoiChuHo, setQuanHeVoiChuHo] = useState('');

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
                setName(res.data.hoTen);
                setDate(res.data.ngaySinh);
                setGioiTinh(res.data.gioiTinh);
                setCmnd(res.data.socmnd);
                setSdt(res.data.sdt);
                setIdHokue(res.data.maHoKhau);
                setAddress(res.data.diaChiHienNay);
                setQuanHeVoiChuHo(res.data.quanHeVoiChuHo);
            })
            .catch((err) => console.error(err));
    }, []);

    // function onchange two ways binding
    const onChangeName = (e) => setName(e.target.value);
    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeGioiTinh = (e) => setGioiTinh(e.target.value);
    const onChangeCmnd = (e) => setCmnd(e.target.value);
    const onChangeSdt = (e) => setSdt(e.target.value);
    const onChangeIdHokue = (e) => setIdHokue(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);
    const onChangeQuanHeVoiChuHo = (e) => setQuanHeVoiChuHo(e.target.value);

    // handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // gọi api
        axios
            .put(`http://localhost:8082/api/v1/nhankhau`, {
                id: people.id,
                maHoKhau: idHokue,
                hoTen: name,
                ngaySinh: date,
                gioiTinh: gioiTinh,
                socmnd: cmnd,
                quanHeVoiChuHo: quanHeVoiChuHo,
                diaChiHienNay: address,
                sdt: sdt,
                isActive: 1,
            })
            .then((res) => {
                console.log(res.data);
                navigate('/nhan-khau');
            })
            .catch((err) => {
                toast.error('cập nhật thất bại', {
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
                        type="text"
                        className={cx('form-control')}
                        id="date"
                        name="date"
                        value={date}
                        onChange={onChangeDate}
                        required
                    />
                </div>

                <div className={cx('form-group')}>
                    <label htmlFor="gioiTinh" className={cx('form-label')}>
                        Giới tính
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="gioiTinh"
                        name="gioiTinh"
                        value={gioiTinh}
                        onChange={onChangeGioiTinh}
                        required
                    />
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
                    cập nhật
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SuaNhanKhau;
