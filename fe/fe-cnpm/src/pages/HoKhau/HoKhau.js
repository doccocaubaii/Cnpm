import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './HoKhau.module.scss';
const cx = classNames.bind(styles);

function HoKhau() {
    const [hukous, sethukous] = useState([]);
    const [count, setCount] = useState(0);
    // gọi api thêm vào phần bảng
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                sethukous(res.data);
                setCount(res.data.length);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // handle search data
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
            .post('https://jsonplaceholder.typicode.com/users', {
                data,
                name: 'thành',
                email: 'Thành thật thà',
                website: 'test',
                phone: '123',
            })
            .then((res) => sethukous([res.data]))
            .catch((err) => {
                console.log(err);
            });
    };

    // handle delete api
    const handDelete = (e) => {
        const id = e.target.getAttribute('data');
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
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
                    <option value="name">tên chủ hộ</option>
                </select>
                <button className={cx('search-btn')}>Tìm Kiếm</button>
            </form>

            <div className={cx('thongke')}>
                <h2>Tổng số hộ khẩu: {count}</h2>
                <Link to="/ho-khau/them-ho-khau" className={cx('add-link')}>
                    Thêm hộ khẩu
                </Link>
            </div>

            <div className="mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
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
                                <td>{hukou.name}</td>
                                <td>{hukou.phone}</td>
                                <td>@mdo{hukou.website}</td>
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
        </>
    );
}

export default HoKhau;
