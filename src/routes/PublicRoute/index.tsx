import React from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import isLogined from "../../utils/isLogined";
import URLS from "../urls";

interface PublicRouteProps extends RouteProps{
    component: React.JSXElementConstructor<any>;
    restricted?: boolean;
}

function PublicRoute({component: Component, restricted, ...rest}: PublicRouteProps) {
    return (
        <Route {...rest}
            render={props => isLogined() && restricted ? <Redirect to={URLS.HOME} /> : <Component {...props} />}
        />
    )
};

export default PublicRoute;