import { FC } from 'react';
import classes from "./Backdrop.module.css";


interface Props {
    show: boolean;
    clicked: () => void;
}

const Backdrop: FC<Props> = ({ show, clicked }) => {
    return show ? (
        <div className={classes.Backdrop} onClick={clicked}></div>
    ) : null;
}

export default Backdrop;

