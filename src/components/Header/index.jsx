import React from 'react';
import { Link } from 'react-router-dom'
Header.propTypes = {
};

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary  bg-primary mb-4">
            <div className="container-fluid">
                <Link className="text-light navbar-brand" to="/">Nghe nhạc hay nhất</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="text-light nav-link active" aria-current="page" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light nav-link" to="/news">Tin tức</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light nav-link" to="/song">Nghe nhạc</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light nav-link" to="/dataServer">DataServer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-light nav-link" to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;