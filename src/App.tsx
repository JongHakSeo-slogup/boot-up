import React, {useRef, useState} from "react";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppLayout from "./components/AppLayout";
import Tutorial from "./components/Tutorial";
import Login from "./components/Login";
import Home from "./components/Home";
import {Route, Switch} from "react-router";

function App() {
  const isVisited = useRef(localStorage.getItem('carpetVisited'));
  const [isFirst, setIsFirst] = useState(true);

  const onClickStart = () => {
    localStorage.setItem('carpetVisited', 'visited');
    setIsFirst(false);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
            <AppLayout>
              {
                isVisited.current || !isFirst
                  ? <Switch>
                      <Route exact path="/" component={Login} />
                      <Route exact path="/home" component={Home} />
                    </Switch>
                   : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

              }
            </AppLayout>
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
