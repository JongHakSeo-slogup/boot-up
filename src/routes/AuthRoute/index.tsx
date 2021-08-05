import {ExtractRouteParams, Route, RouteComponentProps} from "react-router";

interface AuthRoutePros {
    authenticated: boolean;
    isTrue: RouteComponentProps<ExtractRouteParams<string, string>>;
    isfalse: RouteComponentProps<ExtractRouteParams<string, string>>;
}

function AuthRoute({ authenticated, isTrue: True, isfalse: False, ...rest }: AuthRoutePros) {
    return (
        <Route
            {...rest}
            // @ts-ignore
            component={
                authenticated ?
                    True :
                    False
            }
        />
    )
};

export default AuthRoute;