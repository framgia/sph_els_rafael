import {FC,useState} from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

import {ReactComponent as CogIcon} from '../../../assets/Icons/cog.svg';
import {ReactComponent as ChevronIcon} from '../../../assets/Icons/chevron.svg';
// import { CSSTransition } from 'react-transition-group';

const DropdownMenu:FC = () =>{

    // const [activeMenu,setActiveMenu] = useState()

    return(
         <div className="dropdown">
             <div className="menu">
                <DropdownItem >My Profile</DropdownItem>
                <DropdownItem
                    LeftIcon={CogIcon} 
                    RightIcon={ChevronIcon}>
                           Settings
                </DropdownItem>
             </div>
         </div>
    );
};

export default DropdownMenu;