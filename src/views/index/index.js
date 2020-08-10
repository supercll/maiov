import "../../common/css/index.css"

import React from 'react';
import { connect } from 'react-redux';
import Tab from '../../common/component/tabs';

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
        </div>
    );
};

export default connect(res => {
    return res;
})(Index);