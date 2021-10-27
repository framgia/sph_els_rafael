import {FC} from 'react';
import classes from "./Backdrop.module.css";


interface Props{
    show:boolean;
    clicked:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Backdrop:FC<Props> = (props) =>{
    return props.show ? (
        <div className={classes.Backdrop}></div>
      ) : null;
}

