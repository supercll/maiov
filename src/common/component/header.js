import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header id="header">
            <nav className="menu">
                <a>导航</a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <Link className="user" to="/login" />
        </header>
    );
};

export default Header;