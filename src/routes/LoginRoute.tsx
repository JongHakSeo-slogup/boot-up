import React from 'react';
import {hasToken, getUserInfo} from "../utils/user";
import {Route, Redirect} from "react-router-dom";

import URLS from "./urls";
import {isTutorialViewed} from "../utils/tutorial";

const LoginRoute: React.FC<any> = ({component: Component, ...rest}) => {
    const goTutorial = () => {
        if (isTutorialViewed()) return null
        return (
            <Redirect to={URLS.TUTORIAL_PAGE}/>
        );
    }

    return (
        goTutorial() ||
        <Route {...rest} render={props => (
            !hasToken() || !getUserInfo() ?
                <Component {...props} /> :
                <Redirect to={URLS.MAIN_PAGE}/>
        )}/>
    );
};

export default LoginRoute;