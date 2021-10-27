import {FC} from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Topbar from '@components/Navigation/Topbar/Topbar'
import NavigationItem from '@components/Navigation/NavigationItems/NavigationItem'
import DropdownMenu from '@components/DropDown/DropdownMenu/DropdownMenu'  
import NavigationLeftItems from '@components/Navigation/NavigationLeftItems/NavigationLeftItems'; 
import Logo from '@components/SVG/Logo';
import {ReactComponent as CaretIcon} from '@assets/Icons/caret.svg';
import {ReactComponent as BellIcon} from '@assets/Icons/bell.svg';
import AdminQuizzes from '@containers/AdminQuizzes/AdminQuizzes';
import UserCon from '@containers/UsersContainer/UserCon';

const Layout:FC = () =>{
    

    return(
        <>
            <Topbar>
                <div className="flex justify-center items-center">
                    <a className="mr-2" href="#">
                        <Logo/>
                    </a>
                    <h2 className="mr-10 text-3xl text-white">E-Learning Management | Admin</h2>
                  
                </div>
               
                <NavigationLeftItems/>
                <div className="flex flex-end">
                    <NavigationItem Icon={BellIcon}  />
                    <NavigationItem Icon={CaretIcon} >
                        <DropdownMenu></DropdownMenu>
                    </NavigationItem>
                </div>
               
            </Topbar>
            <main className="m-10 h-4/5">
                <Switch>             
                    {/* <Route path="/data/:id" exact component={ShippingAgentMore} /> */}
                    <Route path="/" exact component={AdminQuizzes} />
                    <Route path="/users" exact component={UserCon} />
                    {/* <Route path="/arrivals" exact component={ArrivalView} />
                    <Route path="/logout" component={Logout} /> */}
                    <Redirect to="/" />
                </Switch>
            </main>
        </>);
};

export default Layout;