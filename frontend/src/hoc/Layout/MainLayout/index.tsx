import { FC, Suspense, lazy } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Topbar from '@components/Navigation/Topbar/Topbar'
import NavigationItem from '@components/Navigation/NavigationItems/NavigationItem'
import DropdownMenu from '@components/DropDown/DropdownMenu/DropdownMenu'
import NavigationLeftItems from '@components/Navigation/NavigationLeftItems/NavigationLeftItems';
import Logo from '@components/SVG/Logo';
import { ReactComponent as CaretIcon } from '@assets/Icons/caret.svg';
import { ReactComponent as BellIcon } from '@assets/Icons/bell.svg';
import { routable } from '@myroutes/MainRoutes';
import AdminRoute from '@components/AdminRoute';
import StudentRoute from '@components/StudentRoute';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux'
import Spinner from '@components/UI/Spinner/Spinner';
import HamburgerBtn from '@components/Navigation/HamburgerBtn';
const Logout = lazy(() => import("@containers/Auth/Logout"));
const Dashboard = lazy(() => import("@containers/Dashboard"));

type Props = LinkStateProps;
const Layout: FC<Props> = ({ role }) => {
  return (
    <>
      <Topbar>
        <div>
          <a className="flex items-center py-5 px-2 text-White">
            <Logo />
            <span className="font-bold text-sans text-lg lg:text-3xl">
              E-Learning Management | {role === 2 ? "Student" : "Admin"}</span>
          </a>
        </div>
        <NavigationLeftItems />
        <div className="flex flex-end">
          <NavigationItem Icon={BellIcon} />
          <NavigationItem Icon={CaretIcon} >
            <DropdownMenu></DropdownMenu>
          </NavigationItem>
        </div>
        <HamburgerBtn />
      </Topbar>
      <main className="m-10 h-4/5">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={Dashboard} />
            {routable.map(
              (route, idx) =>
                route.component && route.isAdmin ? (
                  <AdminRoute
                    key={idx}
                    role={role}
                    path={route.path}
                    exact={route.exact}
                    component={route.component} />
                ) : (
                  <StudentRoute
                    key={idx}
                    role={role}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                )
            )}
            <Route path="/Logout" component={Logout} />
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </main>
    </>);
};



interface LinkStateProps {
  role: number | null,
}

const mapStateToProps = (state: RootState, ownProps: any): LinkStateProps => ({
  role: state.auth.userRole
})

export default connect(mapStateToProps, null)(Layout);


