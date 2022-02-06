import React from 'react';
import PropTypes from 'prop-types';
import ShowProduct from '../../features/Product';
import ModalFeature, { showModal } from '../../features/ModalFeture';
import HandelData from './HandelData';

Header.propTypes = {

};
const Form = {
    Input() {
        return <input type='text' />
    }
}

function Header({ data, info, newdata, data2, data60User }) {
    const showInfomation = (e) => {
        console.log(e.target.value);
    }
    return (
        <header className='container'>
            <nav className="navbar navbar-expand-lg navbar-primary  bg-primary mb-4">
                <div className="container-fluid">
                    <a className="text-white navbar-brand" href="#">Nghe nhạc hay nhất</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white">X</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="text-white nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="text-white nav-link" href="#">Nhạc Xuân </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="text-white nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Thể loại
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="text-primary dropdown-item" href="#">K-POP</a></li>
                                    <li><a className="text-primary dropdown-item" href="#">Nhạc Cách mạng</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Tìm</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;