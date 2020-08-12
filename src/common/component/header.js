import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useBack } from "../hook/index";
import { connect } from "react-redux";
import isLogin from "../../store/action/isLogin";
import logout from "../../store/action/logout";

const Header = props => {
    const back = useBack(props.history);
    const path = props.location.pathname;
    const { user, changeShow } = props;
    const [isBtnShow, setBtnShow] = useState(false);
    useEffect(() => {
        props.dispatch(isLogin());
    }, []);
    function getUser() {
        if (user) {
            return (
                <span className="header-btn-right">
                    <span
                        className="header-user"
                        onClick={() => {
                            setBtnShow(!isBtnShow);
                        }}
                    >
                        {user}
                    </span>
                    <span
                        className="header-logout-btn"
                        style={{
                            display: isBtnShow ? "block" : "none",
                        }}
                        onClick={() => {
                            props.dispatch(logout());
                        }}
                    >
                        退出
                    </span>
                </span>
            );
        }

        return path === "/login" ? "" : <Link className="user" to="/login" />;
    }
    return (
        <header id="header">
            <nav className="menu">
                {props.location.pathname === "/login" || /\d{1}$/.test(props.location.pathname) ? (
                    <a
                        className="header-btn-left iconfont icon-back"
                        onClick={() => {
                            back();
                        }}
                    ></a>
                ) : (
                    <a
                        className="header-btn-left iconfont icon-hycaidan"
                        onClick={() => {
                            changeShow();
                        }}
                    ></a>
                )}
            </nav>
            <h1 className="logo">miaov.com</h1>
            {getUser(path, user)}
        </header>
    );
};

export default connect(state => {
    return { user: state.getUser };
})(withRouter(Header));
