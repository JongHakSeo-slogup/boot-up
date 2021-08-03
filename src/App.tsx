import React from "react";
import "./App.css";
import Clock from "./components/Clock";
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
        <div className="App">
          <header className="App-header">
            <Clock />
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
