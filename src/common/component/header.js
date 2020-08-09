import React from 'react';
import http from '../../store/action/http';

const Header = () => {
    http.post("/lecturer/lists?page=1&rows=20", {
        order: "desc",
        sort: "id",
        category_id: 1,
        recommend: 1
    }).then((res) => {
        console.log(res)
    });
    return (
        <header id="header">
            <nav className="menu">
                <a>导航</a>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <a className="user"></a>
        </header>
    );
};

export default Header;