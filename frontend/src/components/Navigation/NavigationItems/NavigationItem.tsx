import {FC,useState} from 'react';

import classes from './NavigationItem.module.css';

interface Props {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    width?: number
    height?: number
}
  

const NavigationItem:FC<Props> = (props)=>{
    const [open,setOpen] = useState(false);

    const { Icon } = props;
    return(
        <li className={classes.navItem}>
            <a href="#" className={classes.iconButton} onClick={()=> setOpen(!open)}>
               <Icon/>

               {open && props.children}
            </a>
        </li>
    )
}

export default NavigationItem;