import React from 'react';
import {Redirect, Route} from "react-router";
import isLogined from "../../utils/isLogined";

interface PublicRouteProps {
    component: any;
    restricted?: boolean;
}

function PublicRoute({component: Component, restricted, ...rest}: any) {
    return (
        <Route {...rest}
            render={props => isLogined() && restricted ? <Redirect to="/home" /> : <Component {...props} />}
        />
    )
};

export default PublicRoute;