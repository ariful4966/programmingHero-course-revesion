import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ user, children, ...rest }) {
    const userToken = sessionStorage.getItem('userToken')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isLogin || userToken ? (
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
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(PrivateRoute);