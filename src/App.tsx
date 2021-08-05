import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import AppLayout from "./components/AppLayout";
import Tutorial from "./components/Tutorial";
import Login from "./components/Login";
import Home from "./components/Home";
import {Route, Switch} from "react-router";
import Cookies from "js-cookie";
import {userSlice} from "./redux/slices/user";
import {User} from "./InterfaceAndType/user";
import Toast from "./components/Toast";

function App() {
  const isVisited = useRef(localStorage.getItem('carpetVisited'));
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useDispatch();

  const onClickStart = () => {
    localStorage.setItem('carpetVisited', 'visited');
    setIsFirst(false);
  };

  useEffect(() => {
    if(localStorage.getItem('user') && Cookies.get('x-auth-token')) {
      const user:User = {name: JSON.parse(localStorage.getItem('user') as string).user_eml_addr};

      dispatch(userSlice.actions.isLogedin(user));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AppLayout>
          <>
            {
              isVisited.current || !isFirst
                  ? <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                  </Switch>
                  : <Tutorial imageName="image_iPhone.png" onClick={onClickStart} />

            }
            <Toast />
          </>
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
