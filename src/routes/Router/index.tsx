import React, {useEffect, useRef, useState} from 'react';
import {Route, Switch} from "react-router";
import Login from "../../components/Login";
import Home from "../../components/Home";
import Tutorial from "../../components/Tutorial";
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {User} from "../../InterfaceAndType/user";
import {userSlice} from "../../redux/slices/user";

function Router() {
    const isVisited = useRef(localStorage.getItem('carpetVisited'));
    const [isFirst, setIsFirst] = useState(true);
    const dispatch = useDispatch();

    const onClickStart = () => {
        localStorage.setItem('carpetVisited', 'visited');
        setIsFirst(false);
    };

    useEffect(() => {
        if(localStorage.getItem('user') && Cookies.get('x-auth-token')) {
            const user:User = {name: JSON.parse(localStorage.getItem('user') as string).user_eml_addr};

            dispatch(userSlice.actions.isLogedin(user));
        }
    }, [dispatch]);

    return (
        <>
            {
                isVisited.current || !isFirst
                    ? <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                    : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

            }
        </>
    );
};

export default Router;