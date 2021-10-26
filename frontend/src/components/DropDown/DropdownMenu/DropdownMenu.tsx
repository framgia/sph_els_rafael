import {FC} from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';
import classes from './DropdownMenu.module.css'
import {ReactComponent as CogIcon} from '../../../assets/Icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../../../assets/Icons/chevron.svg';

const DropdownMenu:FC = () =>{
    return(
         <div className={classes.dropdown}>
             <DropdownItem>My Profile</DropdownItem>
             <DropdownItem
                LeftIcon={CogIcon} 
                RightIcon={ChevronIcon}>
                        asdad
             </DropdownItem>
         </div>
    );
};

export default DropdownMenu;