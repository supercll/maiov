import "../css/common.css";
import "../css/reset.css";
import React, { useState, useRef, useEffect } from 'react';
import Header from './header';
import Menu from './Menu';
import { useInnerHeight } from '../hook/index';
import BScroll from 'better-scroll';

const Frame = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let pageScroll;

    const changeShow = () => {
        setShowMenu(!showMenu);
    };

    const menuHide = () => {
        setShowMenu(false);
    };


    useEffect(() => {
        pageScroll = new BScroll(wrap.current);
    }, []);
    return (
        <div>
            <Header
                changeShow={changeShow}
            />
            <Menu />
            <div id="main"

                style={{
                    transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
                    height: innerH
                }}
                onTouchStart={menuHide}
            >
                <div className="pageWrap" ref={wrap}>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Frame;