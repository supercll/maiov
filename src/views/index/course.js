import React from 'react';

const CourseList = () => {
    return (
        <ul className="content_list clearfix">
            <li className="pop_li">
                <a className="popular">Popular</a>
                <h3 className="list_title">
                    VIP自学阵营
                        <span>A联盟-HTML&CSS</span>
                </h3>
                <p className="price">FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式，解决你在学习中遇到的问题。</p>
                    <a href="#" className="signUp">报名</a>
                </div>
            </li>
            <li className="month_li">
                <h3 className="list_title">WEB前端开发<br />
                    零基础课程</h3>
                <p className="price">￥4800</p>
                <div className="txt">
                    <time>2个月</time>
                    <p>
                        PC端静态页面，移动商静
                        态页面制作...
                        </p>
                    <a className="signUp">报名</a>
                </div>
            </li>
            <li className="month_li">
                <h3 className="list_title">WEB前端开发<br />
                        零基础课程</h3>
                <p className="price">￥9200</p>
                <div className="txt">
                    <time>4个月</time>
                    <p>
                        作用域、闭包、原型链、核
                        心算法...
                        </p>
                    <a className="signUp">报名</a>
                </div>
            </li>
            <li className="pop_li">
                <a className="popular">Popular</a>
                <h3 className="list_title">
                    VIP自学阵营
                        <span>B联盟-JavaScript</span>
                </h3>
                <p className="price">FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式，解决
                        你在学习中遇到的问题。</p>
                    <a className="signUp">报名</a>
                </div>
            </li>
        </ul>
    );
};

export default CourseList;