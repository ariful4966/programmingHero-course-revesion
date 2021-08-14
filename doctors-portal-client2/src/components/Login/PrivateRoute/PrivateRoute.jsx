import { useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";
import jwt_decode from 'jwt-decode'


function PrivateRoute({ children, ...rest }) {

  const [existingUser, setExistingUser] = useContext(UserContext)
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken')
    if (userToken) {
      const { name, email } = jwt_decode(userToken)
      setExistingUser({
        email,
        name,
        isLogin: true
      })
    }
  },[])
  return (
    <Route
      {...rest}
      render={({ location }) =>
        existingUser.email ? (
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
