import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './NhanKhau.module.scss';
const cx = classNames.bind(styles);

function NhanKhau() {
    const [peoples, setPeoples] = useState([]);
    const [count, setCount] = useState(0);
    // gọi api thêm vào phần bảng
    useEffect(() => {
        axios
            .get('http://localhost:8082/api/v1/nhankhaus')
            .then((res) => {
                setPeoples(res.data);
                setCount(res.data.length);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [count]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const inputValue = formElement.querySelector('input').value;
        const searchType = formElement.querySelector('select').value;
        const data = {
            inputValue,
            searchType,
        };
        axios
            .get(`http://localhost:8082/api/v1/nhankhau?${data.searchType}=${data.inputValue}`)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setPeoples(res.data);
                } else {
                    setPeoples([res.data]);
                }
            })
            .catch((err) => {
                toast.error('không có nhân khẩu', {
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
    };

    // handle delete api
    const handDelete = (e) => {
        const id = e.target.getAttribute('data');
        axios
            .delete(`http://localhost:8082/api/v1/nhankhau/${id}`)
            .then((res) => {
                setCount(count - 1);
            })
            .catch((err) => {
                toast.error(' xóa thất bại', {
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
                    <option value="hoten">Họ tên</option>
                </select>
                <button className={cx('search-btn')}>Tìm Kiếm</button>
            </form>

            <div className={cx('thongke')}>
                <h2>Tổng số nhân khẩu: {count}</h2>
                <Link to="/nhan-khau/them-nhan-khau" className={cx('add-link')}>
                    Thêm nhân khẩu
                </Link>
            </div>

            <div className="mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Ngày Sinh</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col" colSpan={2}>
                                Địa chỉ hiện nay
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {peoples.map((people) => (
                            <tr key={people.id}>
                                <th scope="row">{people.id}</th>
                                <td>{people.hoTen}</td>
                                <td>{people.ngaySinh}</td>
                                <td>{people.gioiTinh}</td>
                                <td>{people.diaChiHienNay}</td>
                                <td>
                                    <Link className={cx('table-btn')} to={`/nhan-khau/sua/${people.id}`}>
                                        Sửa
                                    </Link>
                                    <button className={cx('table-btn')} data={people.id} onClick={handDelete}>
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

export default NhanKhau;
