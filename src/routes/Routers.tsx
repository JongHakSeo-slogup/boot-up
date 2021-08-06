
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
import {getSession} from "../apis/account";

const Routers = () => {

    const dispatch = useDispatch();
    const NotFirstVisit = localStorage.getItem('tutorial');
    const user_info = useSelector((state: RootState) => state.user.user);
    const token = getCookie('x-auth-token');
    const isFirstPage = history.location.pathname === '/'

    React.useEffect(() => {
        console.log(NotFirstVisit);
        if(!NotFirstVisit){
            localStorage.setItem('tutorial', 'true');
            history.push(URLS.TUTORIAL_PAGE);
        } else if(NotFirstVisit && isFirstPage && !token){
            history.push(URLS.LOGIN_PAGE);
        } else if(NotFirstVisit && isFirstPage && token){
            getSession().then((res) => {
                dispatch(userSlice.actions.setUser(res.data.row.user));
                history.push(URLS.MAIN_PAGE);
            });

        }
    },[])

    React.useEffect(() => {
        if(token && !user_info && !isFirstPage) {
            getSession().then((res) => {
                dispatch(userSlice.actions.setUser(res.data.row.user));
            }).catch((e) => {
                console.error(e)
            });
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