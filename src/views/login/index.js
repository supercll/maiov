import React from 'react';
import "../../common/css/login.css";
import LoginBox from './login';

const Login = () => {
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <LoginBox />
            </div>

        </div>
    );
};

export default Login;