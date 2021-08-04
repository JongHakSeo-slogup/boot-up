import React from "react";
import "./App.css";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routers from "./routes/Routers";
import {history} from "./redux/reducers";
import URLS from "./routes/urls";

function App() {

  const isFirst = localStorage.getItem('tutorial');

  React.useEffect(() => {
    console.log(isFirst);
    if(!isFirst){
      localStorage.setItem('tutorial', 'true');
      history.push(URLS.TUTORIAL_PAGE);
    } if(isFirst && history.location.pathname !== URLS.TUTORIAL_PAGE){
      history.push(URLS.LOGIN_PAGE);
    }
  },[])

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <div className="App">
          <header className="App-header">
          </header>
            <Routers/>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
