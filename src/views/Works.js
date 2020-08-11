import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Frame from "../common/component/frame";
import getWorks from "../store/action/getWorks";
import { connect } from "react-redux";
const Works = props => {
    const { dispatch } = props;
    const getWorksData = () => {
        const p = dispatch(getWorks());
        return p;
    };

    useEffect(() => {
        getWorksData();
    }, []);
    const { data, loadEnd, loading } = props;
    return (
        <Frame pullUp={true} getData={getWorksData}>
            <div className="works">
                <h3>学员作品</h3>
                <ul className="works_list clearfix">
                    {data.map(item => (
                        <li key={item.id}>
                            <Link to={"/work/" + item.id}>
                                <img src={item.icon} className="work_a" alt="" />
                                <span className="wrork_txt clearfix work_a">
                                    <strong className="work_a">{item.title}</strong>
                                    <span className="work_a">
                                        <em className="work_a">{item.message}</em>
                                        <em className="work_a">{item.good}</em>
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <a className="more">
                    {loadEnd ? "没有新的作品了" : loading ? <h3>作品加载中...</h3> : "上滑加载更多"}
                </a>
                {/* 正在加载中 */}
                {/* 没有新的数据了 */}
            </div>
        </Frame>
    );
};

export default connect(props => ({ ...props.works }))(Works);
