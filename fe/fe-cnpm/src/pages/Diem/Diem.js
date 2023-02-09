import { faPrint, faXmark } from '@fortawesome/free-solid-svg-icons';
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
    // state save modal
    const [hide, setHide] = useState(false);

    // state onchange input modal
    const [idHukouModal, setIdHukouModal] = useState('');
    const [scoreModal, setScoreModal] = useState(0);
    // onchange input modal
    const onChangeidHukouModal = (e) => setIdHukouModal(e.target.value);
    const onChangeScoreModal = (e) => setScoreModal(e.target.value);

    const [hukous, setHukous] = useState([]);
    const toastErr = (message) => {
        toast.error('message', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    // gọi api thêm vào phần bảng
    useEffect(() => {
        axios
            .get('http://localhost:8082/api/v1/hokhaus')
            .then((res) => {
                setHukous(res.data);
            })
            .catch((err) => {
                toastErr('có lỗi xảy ra');
                console.log(err);
            });
    }, [hide]);

    //handle hideModal
    const handleHideModalBtn = (e) => {
        setHide(true);
        setIdHukouModal(e.target.getAttribute('data'));
    };

    //  handle HiddenModal
    const handleHiddenModal = () => setHide(false);

    //handle update score
    const handleUpdateScore = (e) => {
        const arrIdHukou = idHukouModal.split(',');
        const length = arrIdHukou.length;
        arrIdHukou.forEach(async (idHukou, index) => {
            idHukou = idHukou.trim();

            await axios
                .put(`http://localhost:8082/api/v1/hokhau/score/${idHukou}/${scoreModal}`)
                .then((res) => {
                    if (index === length - 1) setHide(false);
                })
                .catch((err) => {
                    console.log(err);
                    toastErr(` hộ khẩu ${idHukou} không thành công`);
                });
        });
    };

    // xủ lí print
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <div className={cx('print-update')}>
                <h3 className={cx('update-score-s')} onClick={handleHideModalBtn}>
                    sửa nhiều hộ
                </h3>
                <button onClick={handlePrint} className={cx('btn-print')}>
                    <FontAwesomeIcon icon={faPrint} className={cx('icon-print')} />
                </button>
            </div>

            <div className={cx('wrapper')} ref={componentRef}>
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

                                    <button
                                        className={cx('add-minus-btn')}
                                        onClick={handleHideModalBtn}
                                        data={hukou.maHoKhau}
                                    >
                                        chỉnh sửa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
            {hide && (
                <div className={cx('main-modal')}>
                    <div className={cx('wrapper-form')}>
                        <button className={cx('close-btn')} onClick={handleHiddenModal}>
                            <FontAwesomeIcon icon={faXmark} className={cx('close-icon')} />
                        </button>
                        <div className={cx('form-group')}>
                            <label htmlFor="idHukou" className={cx('form-label')}>
                                Mã hộ khẩu
                            </label>
                            <input
                                type="text"
                                className={cx('form-control')}
                                id="idHukou"
                                name="idHukou"
                                value={idHukouModal}
                                placeholder="VD: abc, xyz"
                                onChange={onChangeidHukouModal}
                                required
                            />
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="address" className={cx('form-label')}>
                                điểm thay đổi
                            </label>
                            <input
                                type="number"
                                className={cx('form-control')}
                                id="address"
                                name="address"
                                value={scoreModal}
                                onChange={onChangeScoreModal}
                                required
                            />
                        </div>

                        <button className={cx('save-btn')} onClick={handleUpdateScore}>
                            lưu lại
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Diem;
