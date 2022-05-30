import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "context/AuthContext";;

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  return (
    // kiem tra dang nhap
    <Route {...rest}> {children} </Route>
  );
};
export default PrivateRoute;
