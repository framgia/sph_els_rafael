import {FC} from 'react';
import classes from './Topbar.module.css';


 const Topbar:FC = (props) =>{
    return (
        <>
            <nav className={classes.navbar}>
                
                <ul className={classes.navbarNav}>
                    {props.children}
                </ul>    
            </nav>
           
        </>
    )
}

export default Topbar;