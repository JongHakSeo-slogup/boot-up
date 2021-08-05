import React from 'react';
import {hasToken, getUserInfo} from "../utils/user";
import {Route, Redirect} from "react-router-dom";

import URLS from "./urls";

const AuthRoute: React.FC<any> = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            !hasToken() || !getUserInfo() ?
                <Component {...props} /> :
                <Redirect to={URLS.MAIN_PAGE}/>
        )}/>
    );
};

export default AuthRoute;