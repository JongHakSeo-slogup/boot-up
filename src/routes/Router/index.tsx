import React, {useEffect, useRef, useState} from 'react';
import {Route, Switch} from "react-router";
import Home from "../../components/Home";
import Tutorial from "../../components/Tutorial";
import {useDispatch} from "react-redux";
import {User} from "../../InterfaceAndType/user";
import {userSlice} from "../../redux/slices/user";
import isLogined from "../../utils/isLogined";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Mypage from "../../components/Mypage";
import URLS from "../urls";
import NotFound from '../../components/404';

function Router() {
    const isVisited = useRef(localStorage.getItem('carpetVisited'));
    const [isFirst, setIsFirst] = useState(true);
    const dispatch = useDispatch();

    const onClickStart = () => {
        localStorage.setItem('carpetVisited', 'visited');
        setIsFirst(false);
    };

    useEffect(() => {
        if(isLogined()) {
            const user:User = {name: JSON.parse(localStorage.getItem('user') as string).user_eml_addr};

            dispatch(userSlice.actions.isLogedin(user));
        }
    }, [dispatch]);

    return (
        <>
            {
                isVisited.current || !isFirst
                    ? <Switch>
                        <PublicRoute exact path='/' component={Login} restricted />
                        <PublicRoute exact path={URLS.HOME} component={Home} />
                        <PublicRoute exact path={URLS.SIGH_UP} component={Signup} restricted />
                        <PrivateRoute exact path={URLS.MY_PAGE} component={Mypage} />
                        <Route path='/' component={NotFound} />
                    </Switch>
                    : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

            }
        </>
    );
};

export default Router;