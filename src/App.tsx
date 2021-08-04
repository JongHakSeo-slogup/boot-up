import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
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

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <GlobalStyles/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={URLS.TUTORIAL_PAGE} component={Tutorial} />
                        <Route exact path={URLS.LOGIN_PAGE} component={Login} />
                        <Route exact path={URLS.MAIN_PAGE} component={Main} />
                        <Redirect path="*" to={URLS.MAIN_PAGE} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
