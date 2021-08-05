import React, {useEffect, useRef, useState} from 'react';
import {Route, Switch} from "react-router";
import Home from "../../components/Home";
import Tutorial from "../../components/Tutorial";
import {useDispatch} from "react-redux";
import {User} from "../../InterfaceAndType/user";
import {userSlice} from "../../redux/slices/user";
import isLogined from "../../utils/isLogined";
import PrivateRoute from "../PrivateRoute";

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
                        <PrivateRoute exact path='/' component={Home} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
                    : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

            }
        </>
    );
};

export default Router;