import { useState } from "react";
import { Route, Redirect } from "react-router";



 const PrivateRoute = ({ children, ...rest }) => {
    const [auth, setAuth] = useState({})
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;