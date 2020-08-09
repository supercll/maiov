import React, { useState } from 'react';

const LoginBox = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [vcode, setVcode] = useState("");
    const [vcodeShow, setVcodeShow] = useState(false);
    const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="images/user_img.png" alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>

            <div className="login_form">
                <p>
                    <input type="text" placeholder="用户名"
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                    />
                </p>

                <p>
                    <input type="password" placeholder="请输入密码"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input type="text" placeholder="验证码" className="verifyCode"
                        value={vcode}
                        onChange={(e) => {
                            setVcode(e.target.value);
                        }}
                        onFocus={() => {
                            setVcodeShow(true);
                        }}
                    />
                    {vcodeShow ? <img className="verify"
                        src={vcodeSrc}
                        onClick={(e) => {
                            setVcodeSrc("/miaov/user/verify?" + Date.now());
                        }}
                    /> : ""}

                </p>
                <button className="form_btn">登录</button>
                <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>

        </div>
    );
};

export default LoginBox;