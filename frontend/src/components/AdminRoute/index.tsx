import { FC } from 'react'
import { Route, Redirect, RouteProps, } from "react-router-dom";

interface Props extends RouteProps {
  role?: number | null;
}

const AdminRoute: FC<Props> = ({ component: Component, role, ...rest }) => {
  if (!Component) return null;
  return (<Route
    {...rest}
    render={(props) =>
      (role === 0 || role === 1) ? <Component {...props} /> : <Redirect to="/logout" />
    }
  />)
}

export default AdminRoute
