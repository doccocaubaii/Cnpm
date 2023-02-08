import { faPlusMinus, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Diem.module.scss';
const cx = classNames.bind(styles);

function Diem() {
    // end handle modal
    const [hukous, setHukous] = useState([]);
    // gọi api thêm vào phần bảng
    useEffect(() => {
        axios
            .get('http://localhost:8082/api/v1/hokhaus')
            .then((res) => {
                setHukous(res.data);
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
    }, []);

    //handle update score
    const handleUpdateScore = (e) => {
        const maHoKhau = e.target.getAttribute('data');
        console.log(maHoKhau);

        axios
            .put(`http://localhost:8082/api/v1/hokhau/score/${maHoKhau}/1`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    // xủ lí print
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <button onClick={handlePrint} className={cx('btn-print')}>
                <FontAwesomeIcon icon={faPrint} className={cx('icon-print')} />
            </button>

            <div className="mt-4" ref={componentRef}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Mã hộ khẩu</th>
                            <th scope="col">Tên chủ hộ</th>
                            <th scope="col">score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hukous.map((hukou) => (
                            <tr key={hukou.id}>
                                <th scope="row">{hukou.id}</th>
                                <th scope="row">{hukou.maHoKhau}</th>
                                <td>{hukou.tenChuHo}</td>
                                <td>
                                    {hukou.score}
                                    <button className={cx('add-minus-btn')} onClick={handleUpdateScore}>
                                        <FontAwesomeIcon
                                            icon={faPlusMinus}
                                            className={cx('icon-add')}
                                            data={hukou.maHoKhau}
                                        />
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

export default Diem;
