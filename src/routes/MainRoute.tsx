import React from 'react';
import {hasToken, getUserInfo} from "../utils/user";
import {Route} from "react-router-dom";

const MainRoute: React.FC<any> = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            !hasToken() || !getUserInfo() ?
                <Component {...props} look/> :
                <Component {...props} />
        )}/>
    );
};

export default MainRoute;