import React from "react";
import Course from "../views/course";
import Lecturer from "../views/lecturer";
import Login from "../views/login";
import Index from "../views/index";
import Work from "../views/work";
import Works from "../views/Works";

const routeList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props) {
            return <Index {...props} />;
        },
    },
    {
        name: "课程安排",
        path: "/course",
        exact: true,
        render(props) {
            return <Course {...props} />;
        },
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(props) {
            return <Lecturer {...props} />;
        },
    },
    {
        name: "作品详情",
        path: "/work",
        exact: true,
        render(props) {
            return <Work {...props} />;
        },
    },
    {
        name: "登陆",
        path: "/login",
        exact: true,
        render(props) {
            return <Login {...props} />;
        },
    },
    {
        name: "学员作品",
        path: "/works",
        exact: true,
        render(props) {
            return <Works {...props} />;
        },
    },
];

const nav = [
    {
        name: "首页",
        path: "/",
        exact: true,
        className: "iconfont icon-home",
    },
    {
        name: "课程安排",
        path: "/course",
        exact: true,
        className: "iconfont icon-kecheng",
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        className: "iconfont icon-peixunjiangshi",
    },
    {
        name: "学员作品",
        path: "/works",
        exact: true,
        className: "iconfont icon-works",
    },
];

export { routeList, nav };
