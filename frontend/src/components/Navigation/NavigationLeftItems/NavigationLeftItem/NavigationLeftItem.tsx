import { FC } from 'react';
import { NavLink } from "react-router-dom";
import classes from './NavigationLeftItem.module.css';

interface Props {
    link: string,
    exact: boolean;
    path?: string | string[];
}

const NavigationLeftItem: FC<Props> = (props) => {
    return (

        <NavLink
            to={props.link}
            exact={props.exact}
            className="py-5 font-sans px-3 text-base text-white  hover:underline hover:font-bold"
            activeClassName="font-bold text-xl"
        >
            {props.children}
        </NavLink>

    )
}

export default NavigationLeftItem;

