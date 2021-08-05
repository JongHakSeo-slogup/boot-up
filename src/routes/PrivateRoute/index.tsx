import {Route} from "react-router";
import isLogined from "../../utils/isLogined";
import Login from "../../components/Login";

function PrivateRoute({component: Component, ...rest}: any) {
    return (
        <Route {...rest} render={props => isLogined() ? <Component /> : <Login />} />
    )
};

export default PrivateRoute;