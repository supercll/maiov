import React from 'react';
const Menu = () => {
    return (
        <nav id="menu">
            <a className="iconfont icon-home" href="/">首页</a>
            <a className="iconfont icon-kecheng" href="/course">课程安排</a>
            <a className="iconfont icon-peixunjiangshi" href="/lecturer">讲师团队</a>
        </nav>
    );
};

export default Menu;