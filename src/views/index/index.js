import React from 'react';
import { connect } from 'react-redux';
import login from '../../store/action/login';

const Index = (props) => {
    return (
        <div>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <h1>首页</h1>
            <button
                onClick={() => {
                    props.dispatch(login());
                }}
            >登陆</button>
        </div>
    );
};

export default connect(res => {
    return res;
})(Index);