import { FC } from 'react';
import DropdownItem from '../DropdownItem/DropdownItem';
import { ReactComponent as CogIcon } from '../../../assets/Icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../../assets/Icons/chevron.svg';
import { Link } from 'react-router-dom';
import { RootState } from '@store/reducers'
import { connect } from 'react-redux'

const DropdownMenu: FC = () => {
    const id = localStorage.getItem('userid');
    return (
        <div className="dropdown">
            <div className="menu">
                <Link className="h-10 flex align-center font-bold 
                text-lg pl-5 hover:bg-gray-700" to={`/profile/${id}`}>
                    <i className="fas fa-id-card self-center mr-2"></i>
                    <span className="self-center">My Profile</span>
                </Link>
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


