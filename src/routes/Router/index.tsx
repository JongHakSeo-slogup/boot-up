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
                        <PublicRoute exact path='/home' component={Home} />
                        <PublicRoute exact path='/signup' component={Signup} restricted />
                        <PrivateRoute exact path='/mypage' component={Mypage} />
                    </Switch>
                    : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

            }
        </>
    );
};

export default Router;