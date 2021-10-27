import {FC} from 'react';
import classes from "./Spinner.module.css";

const Spinner:FC = () =>{
    return <div className={classes.loader}>Loading...</div>;
}

export default Spinner;