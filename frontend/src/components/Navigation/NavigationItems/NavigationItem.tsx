import React, * as react from 'react';
import classes from './NavigationItem.module.css';

interface Props {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    width?: number
    height?: number
}
  

const NavigationItem:React.FC<Props> = (props)=>{
    const { Icon } = props;
    return(
        <li className={classes.navItem}>
            <a href="#" className={classes.iconButton}>
               <Icon/>
            </a>
        </li>
    )
}

export default NavigationItem;