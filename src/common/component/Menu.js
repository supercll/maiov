import React from 'react';
import { NavLink } from 'react-router-dom';
import { nav } from '../../router/route_list';
const Menu = (props) => {
    return (
        <nav id="menu">
            {nav.map((item, index) => {
                return (
                    <NavLink
                        to={item.path}
                        className={item.className}
                        exact={item.exact}
                        key={index, index}
                        onTouchEnd={props.menuHide}
                        activeClassName={"active"}
                    >{item.name}</NavLink>
                );
            })}
        </nav>
    );
};

export default Menu;