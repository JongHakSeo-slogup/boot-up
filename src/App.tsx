import React, {useEffect, useState} from "react";
import { Theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";
import {getSession} from "./apis/account";
import AppLayout from "./components/AppLayout";
import Tutorial from "./components/Tutorial";
import Login from "./components/Login";

function App() {
  const [isFirstVisited, setIsFisrtVisited] = useState(true);

  useEffect(() => {
    getSession().then(data => console.log(data)).catch(e => console.log(e));
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
                  ? <Tutorial imageName="image_iPhone.png" onClick={() => setIsFisrtVisited(false)} />
                    : <Login/>
              }
            </AppLayout>
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
