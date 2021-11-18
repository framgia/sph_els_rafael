import { FC } from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
  isAuth: boolean;
  role: number;
}


const AdminRoute: FC<Props> = ({ component: Component, isAuth, role, ...rest }) => {
  if (!isAuth) {
    <Route {...rest} />
  }
  return <Redirect to="/login" />
}
export default AdminRoute