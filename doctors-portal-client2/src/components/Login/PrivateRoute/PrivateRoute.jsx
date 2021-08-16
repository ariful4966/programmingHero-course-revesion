import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwt_decode from 'jwt-decode'


function PrivateRoute({ children, ...rest }) {

  const [existingUser, setExistingUser] = useContext(UserContext)

  useEffect(() => {
    if (existingUser.isLogin === false) {
      const extUserToken = sessionStorage.getItem('userToken')
      if (existingUser === true) {
        const { name, email } = jwt_decode(extUserToken);
        setExistingUser({
          name,
          email,
          isLogin: true
        })
      }
    }
  }, [existingUser])

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
