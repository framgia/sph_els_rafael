import {FC} from 'react';
import Topbar from '../../components/Navigation/Topbar/Topbar'
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem'
import DropdownMenu from '../../components/DropDown/DropdownMenu/DropdownMenu'   
import {ReactComponent as CaretIcon} from '../../assets/Icons/caret.svg';
import {ReactComponent as BellIcon} from '../../assets/Icons/bell.svg';

const Layout:FC = () =>{
    

    return(
        <>
            <Topbar>
                <NavigationItem Icon={BellIcon}  />
                <NavigationItem Icon={CaretIcon} >
                    <DropdownMenu></DropdownMenu>
                </NavigationItem>
            </Topbar>
        </>);
};

export default Layout;