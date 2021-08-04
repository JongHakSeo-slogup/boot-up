import React, {useEffect, useState} from "react";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppLayout from "./components/AppLayout";
import Tutorial from "./components/Tutorial";
import Login from "./components/Login";
import Home from "./components/Home";
import {Route, Switch, withRouter} from "react-router";

function App() {
  const [isFirstVisited, setIsFisrtVisited] = useState(true);

  const onClickStart = () => {
    localStorage.setItem('carpetVisited', 'visited');
    setIsFisrtVisited(false);
  }

  useEffect(() => {
    if(localStorage.getItem('carpetVisited')) {
      setIsFisrtVisited(false);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <AppLayout>
              {
                isFirstVisited
                  ? <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />
                    : <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                    </Switch>
              }
            </AppLayout>
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
