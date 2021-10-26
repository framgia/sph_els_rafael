import {FC} from 'react';
import Topbar from '../../components/Navigation/Topbar/Topbar'
import NavigationItem from '../../components/Navigation/NavigationItems/NavigationItem'
import {ReactComponent as BellIcon} from '../../assets/Icons/bell.svg';

const Layout:FC = () =>{
    

    return(
        <>
            <Topbar>
                <NavigationItem Icon={BellIcon} width={35} height={35} />
                {/* <NavigationItem icon="" />
                <NavigationItem icon="" /> */}
            </Topbar>
        </>
    );
};

export default Layout;