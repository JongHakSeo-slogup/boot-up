import React from 'react';
import {isTutorialViewed} from "../utils/tutorial";
import {Route, Redirect} from "react-router-dom";

import URLS from "./urls";

const TutorialRoute: React.FC<any> = ({component: Component, ...rest}) => {
    console.log("실행됨")
    return (
        <Route {...rest} render={props => (
            isTutorialViewed() ?
                <Redirect to={URLS.LOGIN_PAGE}/> :
                <Component {...props} />
        )}/>
    );
};

export default TutorialRoute;