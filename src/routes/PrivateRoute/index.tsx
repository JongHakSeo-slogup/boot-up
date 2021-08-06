import {Redirect, Route} from "react-router";
import isLogined from "../../utils/isLogined";

function PrivateRoute({component: Component, ...rest}: any) {
    return (
        <Route {...rest} render={props => isLogined() ? <Component /> : <Redirect to='/' />} />
    )
};

export default PrivateRoute;