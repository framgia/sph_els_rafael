import {FC} from 'react';
import { NavLink } from "react-router-dom";


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
        <li className="text-xl mr-2">
            <NavLink to={props.link}  exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationLeftItem;