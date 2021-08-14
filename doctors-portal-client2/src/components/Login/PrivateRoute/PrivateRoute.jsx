import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";


function PrivateRoute({ children, ...rest }) {
  const { existingUser } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
      existingUser.isLogin ? (
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

export default PrivateRoute;
