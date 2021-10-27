import {FC} from 'react';
import { NavLink } from "react-router-dom";
import classes from './NavigationLeftItem.module.css';

interface Props {
    link:string,
    exact:boolean;
    component?:React.ComponentType<any>;
    path?: string | string[];
    sensitive?: boolean;
    strict?: boolean;
}

const NavigationLeftItem:FC<Props> = (props) =>{
    return(
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.link}  
                exact={props.exact}
             
                activeStyle={{fontWeight:'bolder',fontSize:"1.5rem"}}
                >
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationLeftItem;