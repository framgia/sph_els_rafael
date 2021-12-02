import { FC } from 'react';
import { Redirect, Switch, Route, NavLink } from "react-router-dom";
import UserDetailSettings from './UserDetailSettings';
import UserPasswordSettings from './UserPasswordSettings';
import classes from './UserSettings.module.css';

const UserSettings: FC = () => {
    return (
        <div className={classes.settingsBox}>
            <div className="pl-5 py-2 bg-gray-900 text-white">
                <h4>Settings</h4>
            </div>
            <div className="flex font-sans px-10 py-5 bg-gray-900">
                <NavLink activeClassName="font-bold" className="ml-5" to="/Settings/UserDetails">Details</NavLink>
                <NavLink activeClassName="font-bold" className="ml-5" to="/Settings/UserPassword">Password</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path="/Settings/UserDetails" exact >
                        <UserDetailSettings />
                    </Route>
                    <Route path="/Settings/UserPassword" exact >
                        <UserPasswordSettings />
                    </Route>
                    <Redirect to="/Settings" />
                </Switch>
            </div>
        </div>
    )
}

export default UserSettings;
