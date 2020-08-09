import React from 'react';
import Index from '../views/index';
import Course from '../views/course';
import Lecturer from '../views/lecturer';
import Login from '../views/login';
import Work from '../views/work';

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
            return <Course  {...props} />;
        },
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(props) {
            return <Lecturer  {...props} />;
        },
    },
    {
        name: "作品详情",
        path: "/work",
        exact: true,
        render(props) {
            return <Work  {...props} />;
        },
    },
    {
        name: "登陆",
        path: "/login",
        exact: true,
        render(props) {
            return <Login  {...props} />;
        },
    },
];

export default routeList;