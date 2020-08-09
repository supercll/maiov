import React, { useState } from 'react';
import Header from './header';
import Menu from './Menu';
import "../css/reset.css";
import "../css/common.css";

const Frame = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const changeShow = () => {
        setShowMenu(!showMenu);
    };

    const menuHide = () => {
        setShowMenu(false);
    };
    return (
        <div>
            <Header
                changeShow={changeShow}
            />
            <Menu
                style={{
                    position: 'relative',
                    transform: `translateX(${showMenu ? 4.5 : 0}rem)`
                }}
            />
            <div id="main"
                style={{
                    transform: `translateX(${showMenu ? 4.5 : 0}rem)`
                }}
                onTouchStart = {menuHide}
            >
                {props.children}
            </div>
        </div >
    );
};

export default Frame;