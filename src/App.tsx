import React from "react";
import "./App.css";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider, useSelector, useDispatch } from "react-redux";
import store, { RootState } from "./redux/store";
import Routers from "./routes/Routers";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <div className="App">
          <header className="App-header"></header>
          <Routers />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
