import {FC} from 'react';
import Topbar from '../../components/Navigation/Topbar/Topbar'
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem'
import DropdownMenu from '../../components/DropDown/DropdownMenu/DropdownMenu'   
import {ReactComponent as CaretIcon} from '../../assets/Icons/caret.svg';

const Layout:FC = () =>{
    

    return(
        <>
            <Topbar>
                <NavigationItem Icon={CaretIcon} width={35} height={35} >
                    <DropdownMenu/>
                </NavigationItem>
           
            </Topbar>
        </>);
};

export default Layout;