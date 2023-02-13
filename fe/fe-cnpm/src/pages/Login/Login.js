import { faFacebook, faGooglePlus, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Login.scss';
function Login() {
    // khai báo chuyển hướng
    const navigate = useNavigate();
    // state two ways binding username , password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // onchange function
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    // handle Submit
    const handleSubmit = (e) => {
        const emailTrue = 'cnpm@gmail.com';
        const passwordTrue = '123456';
        const token = 'bancoquyentruycap';
        e.preventDefault();
        if (email === emailTrue && password === passwordTrue) {
            document.cookie = `token=${token}`;
            navigate('/nhan-khau');
        } else {
            toast.error('mật khẩu hoặc email không chính xác', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };
    return (
        <div className="main">
            <form className="form" id="form-1" onSubmit={handleSubmit}>
                <h3 className="heading">Login</h3>
                <div className="spacer" />
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        rules="required|email"
                        type="text"
                        placeholder="Enter your email"
                        className="form-control"
                        value={email}
                        onChange={onChangeEmail}
                        required
                    />
                    <span className="form-message" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        Mật khẩu
                    </label>
                    <input
                        id="password"
                        name="password"
                        rules="required|min:6"
                        type="password"
                        placeholder="Enter your password"
                        className="form-control"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                    <span className="form-message" />
                </div>
                <button className="form-submit">Login</button>

                <label>Or sign in with:</label>
                <div className="icon-group">
                    <FontAwesomeIcon icon={faFacebook} className="icon icon-facebook" />
                    <FontAwesomeIcon icon={faSquareTwitter} className="icon icon-twitter" />
                    <FontAwesomeIcon icon={faGooglePlus} className="icon icon-google" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Login;
