import "../../common/css/index.css";

import React from 'react';
import { connect } from 'react-redux';
import Tab from '../../common/component/tabs';
import CourseList from "./course";
import Vip from "./vip";
import Miaov from "./miaov";
import Works from "./works";

let imgData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];
const Index = (props) => {
    return (
        <div>
            <Tab
                data={imgData}
                render={(data) => {
                    return <img src={data} />;
                }}
            />

            <section className="index_content">
                <CourseList />
                <Vip />
                <Miaov />
                <Works />
            </section>

        </div>
    );
};

export default connect(res => {
    return res;
})(Index);