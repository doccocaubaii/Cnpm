import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './HoKhau.module.scss';
const cx = classNames.bind(styles);

function HoKhau() {
    const [hukous, setHukous] = useState([]);
    const [count, setCount] = useState(0);
    const [undo, setUndo] = useState(false);
    // gọi api thêm vào phần bảng
    useEffect(() => {
        axios
            .get('http://localhost:8082/api/v1/hokhaus')
            .then((res) => {
                setHukous(res.data);
                setCount(res.data.length);
            })
            .catch((err) => {
                console.log(err);
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
            });
    }, [count]);

    //handle undo all
    const handleUndoAllHukou = (e) => {
        setUndo(false);
        setCount(count - 1);
    };

    // handle search data
    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const inputValue = formElement.querySelector('input').value;
        const searchType = formElement.querySelector('select').value;
        axios
            .get(`http://localhost:8082/api/v1/hokhau?${searchType}=${inputValue}`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setHukous(res.data);
                } else {
                    setHukous([res.data]);
                }
                setUndo(true);
            })
            .catch((err) => {
                console.log(err);
                toast.error('không tìm thấy', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                });
            });
    };

    // handle delete api
    const handDelete = (e) => {
        const id = e.target.getAttribute('data');
        axios
            .delete(`http://localhost:8082/api/v1/hokhau/${id}`)
            .then((res) => {
                setCount(count - 1);
            })
            .catch((err) => {
                toast.error('xóa thất bại', {
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
        <>
            <form className={cx('wrapper')} onSubmit={handleSubmit}>
                <div className={cx('search')}>
                    <input placeholder="enter search value" spellCheck={false} required />
                </div>
                <select className={cx('search-select')} name="type" required>
                    <option value="">select</option>
                    <option value="id">ID</option>
                    <option value="maHoKhau">Mã hộ khẩu</option>
                </select>
                <button className={cx('search-btn')}>Tìm Kiếm</button>
            </form>

            <div className={cx('thongke')}>
                <h2>Tổng số hộ khẩu: {count}</h2>
                <Link to="/ho-khau/them-ho-khau" className={cx('add-link')}>
                    Thêm hộ khẩu
                </Link>
            </div>

            {undo && (
                <h3 className={cx('undo-all-people')} onClick={handleUndoAllHukou}>
                    Tất cả nhân khẩu
                </h3>
            )}

            <div className="mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Mã hộ khẩu</th>
                            <th scope="col">Tên chủ hộ</th>
                            <th scope="col">Số Thành viên</th>
                            <th scope="col" colSpan={2}>
                                Địa chỉ hiện nay
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {hukous.map((hukou) => (
                            <tr key={hukou.id}>
                                <th scope="row">{hukou.id}</th>
                                <th scope="row">{hukou.maHoKhau}</th>
                                <td>{hukou.tenChuHo}</td>
                                <td>{hukou.slThanhVien}</td>
                                <td>{hukou.diaChi}</td>
                                <td>
                                    <Link className={cx('table-btn')} to={`/ho-khau/sua/${hukou.id}`}>
                                        Sửa
                                    </Link>
                                    <button className={cx('table-btn')} data={hukou.id} onClick={handDelete}>
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </>
    );
}

export default HoKhau;
