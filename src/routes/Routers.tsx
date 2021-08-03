
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from "../redux/reducers";
import Tutorial from "../components/Tutorial";
import URLS from "./urls";

const Routers = () => {
    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={URLS.TUTORIAL_PAGE} component={Tutorial}/>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routers;