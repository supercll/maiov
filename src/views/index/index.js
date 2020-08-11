import "../../common/css/index.css";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Tab from "../../common/component/tabs";
import CourseList from "./course";
import Vip from "./vip";
import Miaov from "./miaov";
import Works from "./works";
import Frame from "../../common/component/frame";
import getWorks from "../../store/action/getWorks";

const imgData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png"),
];
const Index = props => {
    const [page] = useState(1);
    const { dispatch } = props;
    const getWorksData = () => {
        const p = dispatch(getWorks(page));
        return p;
    };

    useEffect(() => {
        getWorksData();
    }, []);
    return (
        <Frame pullUp={true} getData={getWorksData}>
            <div>
                <Tab
                    data={imgData}
                    render={data => {
                        return <img src={data} />;
                    }}
                />

                <section className="index_content">
                    <CourseList />
                    <Vip />
                    <Miaov />
                    <Works {...props} />
                </section>
            </div>
        </Frame>
    );
};

export default connect(props => ({ ...props.works }))(Index);
