import React from "react";
import Switch from 'react-router';
import "./App.css";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

      </ThemeProvider>
    </Provider>
  );
}

export default App;
