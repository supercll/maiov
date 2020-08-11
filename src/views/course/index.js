import React from 'react';
import Frame from '../../common/component/frame';
import "../../common/css/class.css";
import Footer from '../../common/component/footer';
function Course() {
    return (<Frame>
        <div className="class_box">
            <h2><span>一周学习安排</span></h2>
            <table className="timetable">
                <thead>
                    <tr>
                        <th>星期</th>
                        <th>时间</th>
                        <th>学习内容</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="week1" rowSpan="2">周一</td>
                        <td className="center">上午</td>
                        <td className="content_td">浏览器底层运行机制</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">JS数据类型转换</td>
                    </tr>
                    <tr>
                        <td className="week2" rowSpan="2">周二</td>
                        <td className="center">上午</td>
                        <td className="content_td">闭包全解</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">new全解</td>
                    </tr>
                    <tr>
                        <td className="week3" rowSpan="2">周三</td>
                        <td className="center">上午</td>
                        <td className="content_td">this全解</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">JS异步专题</td>
                    </tr>
                    <tr>
                        <td className="week4" rowSpan="2">周四</td>
                        <td className="center">上午</td>
                        <td className="content_td">浏览器底层渲染机制</td>
                    </tr>
                    <tr>
                        <td className="center">下午</td>
                        <td className="content_td">浏览器性能优化</td>
                    </tr>
                    <tr className="single">
                        <td className="center week5">周五</td>
                        <td className="center">全天</td>
                        <td className="content_td">浏览器兼容性</td>
                    </tr>
                    <tr className="single">
                        <td className="center week6">周末</td>
                        <td className="center" colSpan="2">合理安排自己的时间，记得做练习哦！</td>
                    </tr>
                </tbody>
            </table>
            <p className="more_message">
                更详情的课程安排请点击：<a href="#">www.miaov.com</a>
            </p>
        </div>
        <Footer />
    </Frame >);
}

export default Course;