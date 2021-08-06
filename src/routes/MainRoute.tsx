import React from 'react';
import {isTutorialViewed} from "../utils/tutorial";
import {Redirect, Route} from "react-router-dom";
import URLS from "./urls";

const MainRoute: React.FC<any> = ({component: Component, ...rest}) => {

    const goTutorial = () => {
        if (isTutorialViewed()) return null
        return (
            <Redirect to={URLS.TUTORIAL_PAGE} />
        );
    }

    return (
        goTutorial() || (
            <Route {...rest} render={props => <Component {...props} />}/>
        )
    );
};

export default MainRoute;