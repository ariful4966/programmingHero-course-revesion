
import {  useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const user = useSelector(state => state.user)
    const userToken = sessionStorage.getItem('userToken');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.isLogin || userToken) ? (
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
};


export default PrivateRoute;