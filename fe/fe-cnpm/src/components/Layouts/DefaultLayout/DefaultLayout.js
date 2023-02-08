import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container mt-4">{children}</div>
        </div>
    );
}

export default DefaultLayout;
