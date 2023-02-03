import classNames from 'classnames/bind';
import styles from './SinhHoat.module.scss';

const cx = classNames.bind(styles);

function SinhHoat() {
    return (
        <div className={cx('content')}>
            <div
                className={cx('content-edit')}
                id="mce_0"
                contentEditable="true"
                style={{ position: 'relative' }}
                spellCheck="false"
            >
                <table
                    style={{ width: '100%', borderCollapse: 'collapse' }}
                    border={0}
                    data-mce-style="width: 100%; border-collapse: collapse;"
                    className="mce-item-table"
                    data-mce-selected={1}
                >
                    <tbody>
                        <tr>
                            <td
                                style={{ width: '50%', textAlign: 'center' }}
                                data-mce-style="width: 50%; text-align: center;"
                            >
                                <p>
                                    <strong>Tổ dân cư số 7</strong>
                                </p>
                            </td>
                            <td
                                style={{ width: '50%', textAlign: 'center' }}
                                data-mce-style="width: 50%; text-align: center;"
                            >
                                <p>
                                    <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong>
                                </p>
                                <p>
                                    <strong>Độc lập - Tự do - Hạnh phúc</strong>
                                </p>
                                <p>
                                    <strong>……., ngày ……..tháng…….năm……</strong>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ textAlign: 'center' }} data-mce-style="text-align: center;">
                    <strong>GIẤY MỜI HỌP</strong>
                </p>
                <p style={{ textAlign: 'center' }} data-mce-style="text-align: center;">
                    Kính gửi:.............................................
                </p>
                <p>Đến dự cuộc họp :……………………………</p>
                <p>Địa điểm :…………………………………………</p>
                <p>Thời gian :…………………………………………</p>
                <p>Tổ trưởng tổ dân phố</p>
                <table
                    style={{ width: '100%', borderCollapse: 'collapse' }}
                    border={0}
                    data-mce-style="width: 100%; border-collapse: collapse;"
                    className="mce-item-table"
                >
                    <tbody>
                        <tr>
                            <td
                                style={{ width: '50%', textAlign: 'center' }}
                                data-mce-style="width: 50%; text-align: center;"
                            >
                                <br />
                            </td>
                            <td
                                style={{ width: '50%', textAlign: 'center' }}
                                data-mce-style="width: 50%; text-align: center;"
                            >
                                <p>(Ký tên, đóng dấu)</p>
                                <p>
                                    <strong>Thành</strong>
                                </p>
                                <strong>BÙI NGỌC THÀNH</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SinhHoat;
