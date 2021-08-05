import React from "react";
import {BrowserRouter, Switch, Route, Redirect, Router} from "react-router-dom";
import "./App.css";
import {Theme} from "./styles/theme";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import {Provider} from "react-redux";
import store from "./redux/store";
import URLS from "./routes/urls";

import Main from "./components/Main";
import Login from "./components/Login";
import Tutorial from "./components/Tutorial";

import TutorialRoute from "./routes/TutorialRoute";

import {sagaHistory} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <GlobalStyles/>
                <Router history={sagaHistory}>
                    <Switch>
                        <TutorialRoute exact path={URLS.TUTORIAL_PAGE} component={Tutorial}/>
                        <Route exact path={URLS.LOGIN_PAGE} component={Login} />
                        <Route exact path={URLS.MAIN_PAGE} component={Main} />
                        <Redirect path="*" to={URLS.MAIN_PAGE} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
