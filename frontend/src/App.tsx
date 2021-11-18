import { FC, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from './hoc/Layout/MainLayout';
import LoginLayout from './hoc/Layout/LoginLayout';
import { RootState } from '@store/reducers'
import { authCheckState } from '@store/actions/action-creator/'
import { connect, useDispatch } from 'react-redux'
import Http from './http-common'

type Props = LinkStateProps;
const App: FC<Props> = ({ token }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      await Http.get('/sanctum/csrf-cookie');
    }
    init();
    dispatch(authCheckState());
  }, [])

  let routes: any = "";
  if (token) {
    routes = (
      <>
        <Route path={["/"]} component={MainLayout} />
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
interface LinkStateProps {
  token: string | any,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  token: state.auth.token,
})

export default connect(mapStateToProps, null)(App)
