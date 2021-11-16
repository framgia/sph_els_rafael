import { FC } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';

import { ReactComponent as CogIcon } from '../../../assets/Icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../assets/Icons/chevron.svg';
import { Link } from 'react-router-dom';

const DropdownMenu: FC = () => {


    return (
        <div className="dropdown">
            <div className="menu">
                <DropdownItem >My Profile</DropdownItem>
                <DropdownItem
                    LeftIcon={CogIcon}
                    RightIcon={ChevronIcon}>
                    Settings
                </DropdownItem>
                <Link className="h-10 flex align-center font-bold 
                text-xl pl-5 hover:bg-gray-700" to='/logout'>
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default DropdownMenu;

