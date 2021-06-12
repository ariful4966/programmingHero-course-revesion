import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { RoomData } from "../../App";


export function PrivateRoute({ children, ...rest }) {
    const [, , , loggedInUser]=useContext(RoomData)
    return (
      <Route
        {...rest}
        render={({ location }) => 
          loggedInUser.email ? (
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
  