import "../css/common.css";
import "../css/reset.css";
import React, { useState, useRef, useEffect } from 'react';
import Header from './header';
import Menu from './Menu';
import { useInnerHeight } from '../hook/index';
import BScroll from 'better-scroll';

const Frame = (props) => {
    const { pullUp, getData } = props;
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
        pageScroll = new BScroll(wrap.current, {
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className: /(^|\s)work_a(\s|$)/
            },
            pullUpLoad: pullUp ? { threshold: 200 } : false
        });
        pageScroll.on("pullingUp", () => {
            getData().then(res => {
                if (res) {
                    pageScroll.finishPullUp();
                    pageScroll.refresh();
                } else {
                    pageScroll.closePullUp();
                }

            });
        });
    }, []);
    return (
        <div>
            <Header
                changeShow={changeShow}
            />
            <Menu menuHide={menuHide} />
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