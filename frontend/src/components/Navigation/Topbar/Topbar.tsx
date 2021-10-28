import { FC } from 'react';

const Topbar: FC = (props) => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
            </nav>

        </>
    )
}

export default Topbar;

