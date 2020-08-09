import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routeList from './route_list';

const IndexRoute = () => {
    return (
        <Switch>
            {routeList.map((item, index) => {
                return (
                    <Route
                        path={item.path}
                        exact={item.exact}
                        render={item.render}
                        key={index}
                    />);
            })}
        </Switch>
    );
};

export default IndexRoute;