
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from "../redux/reducers";
import Tutorial from "../pages/Tutorial";
import Login from '../pages/Login';
import URLS from "./urls";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {getCookie} from "../shared/Cookie";
import React from "react";
import {userSlice} from "../redux/slices/user";
import Main from "../pages/Main";

const Routers = () => {

    const dispatch = useDispatch();
    const isFirst = localStorage.getItem('tutorial');
    const user_info = useSelector((state: RootState) => state.user.user);
    const token = getCookie('x-auth-token');

    React.useEffect(() => {
        console.log(isFirst);
        if(!isFirst){
            localStorage.setItem('tutorial', 'true');
            history.push(URLS.TUTORIAL_PAGE);
        } else if(isFirst && history.location.pathname !== URLS.TUTORIAL_PAGE && !token){
            history.push(URLS.LOGIN_PAGE);
        } else {
            history.push(URLS.MAIN_PAGE);
        }
    },[])

    React.useEffect(() => {
        if(token && !user_info) {
            dispatch(userSlice.actions.login());
        }
    },[]);

    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={URLS.TUTORIAL_PAGE} component={Tutorial}/>
                <Route exact path={URLS.LOGIN_PAGE} component={Login}/>
                <Route exact path={URLS.MAIN_PAGE} component={Main}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routers;