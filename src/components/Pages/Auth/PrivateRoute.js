import { useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";



 const PrivateRoute = ({auth ,children, ...rest }) => {
    // const [auth, setAuth] = useState({})
    console.log(auth);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.name ? (
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
const mapStateToProps = state=>{
    return {auth:state.authReducer}
}
export default connect(mapStateToProps) (PrivateRoute);