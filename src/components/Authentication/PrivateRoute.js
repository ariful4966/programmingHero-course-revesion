import { useContext } from "react";
import { Dataprovid } from "../../App";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ children, ...rest }) => {
    const { data } = useContext(Dataprovid)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                data.user.isLogedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}