import {Redirect, Route, RouteProps} from "react-router";
import isLogined from "../../utils/isLogined";
import React from "react";
import URLS from "../urls";

interface PrivateRouteProps extends RouteProps {
    component: React.JSXElementConstructor<any>;
}

function PrivateRoute({component: Component, ...rest}: PrivateRouteProps) {
    return (
        <Route {...rest} render={props => isLogined() ? <Component /> : <Redirect to={URLS.LOGIN} />} />
    )
};

export default PrivateRoute;