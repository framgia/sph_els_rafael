import { FC } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AdminLayout from './hoc/Layout/AdminLayout';
import LoginLayout from './hoc/Layout/LoginLayout';

interface Props {
  userToken?: string;
}

const App: FC<Props> = ({ userToken }) => {

  let routes: any = "";
  if (userToken) {
    routes = (
      <>
        <Route path={["/"]} component={AdminLayout} />
      </>
    )
  } else {
    routes = (
      <>
        <Route path={["/login", "/signup"]} component={LoginLayout} />
        <Redirect to='/login' />
      </>
    );
  }


  return (
    <div>
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App;
