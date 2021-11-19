import { FC } from 'react';
import HiddenMenus from '../HiddenMenus';

const Topbar: FC = (props) => {
    return (
        <nav className="bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    {props.children}
                </div>
            </div>
            <HiddenMenus />
        </nav>
    )
}

export default Topbar;

