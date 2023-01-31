import './Login.scss';
function Login() {
    return (
        <div className="main">
            <form className="form" id="form-1">
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
                    />
                    <span className="form-message" />
                </div>
                <button className="form-submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
