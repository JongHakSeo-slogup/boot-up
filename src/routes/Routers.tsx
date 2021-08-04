
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from "../redux/reducers";
import Tutorial from "../pages/Tutorial";
import Login from '../pages/Login';
import URLS from "./urls";

const Routers = () => {
    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={URLS.TUTORIAL_PAGE} component={Tutorial}/>
                <Route exact path={URLS.LOGIN_PAGE} component={Login}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routers;