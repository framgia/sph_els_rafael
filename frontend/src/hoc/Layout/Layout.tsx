import { FC, Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Topbar from '@components/Navigation/Topbar/Topbar'
import NavigationItem from '@components/Navigation/NavigationItems/NavigationItem'
import DropdownMenu from '@components/DropDown/DropdownMenu/DropdownMenu'
import NavigationLeftItems from '@components/Navigation/NavigationLeftItems/NavigationLeftItems';
import Logo from '@components/SVG/Logo';
import { ReactComponent as CaretIcon } from '@assets/Icons/caret.svg';
import { ReactComponent as BellIcon } from '@assets/Icons/bell.svg';
import { routable } from '../../routes/';

const Layout: FC = () => {


    return (
        <>
            <Topbar>
                <div className="flex justify-center items-center">
                    <a className="mr-2" href="#">
                        <Logo />
                    </a>
                    <h2 className="mr-10 text-3xl text-white">E-Learning Management | Admin</h2>

                </div>

                <NavigationLeftItems />
                <div className="flex flex-end">
                    <NavigationItem Icon={BellIcon} />
                    <NavigationItem Icon={CaretIcon} >
                        <DropdownMenu></DropdownMenu>
                    </NavigationItem>
                </div>

            </Topbar>
            <main className="m-10 h-4/5">
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        {routable.map(
                            (route, idx) =>
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.component}
                                    />
                                )
                        )}
                        <Redirect to="/" />
                    </Suspense>
                </Switch>
            </main>
        </>);
};

export default Layout;

