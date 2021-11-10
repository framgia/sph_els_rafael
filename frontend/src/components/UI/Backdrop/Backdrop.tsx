import { FC } from 'react';
import { motion } from 'framer-motion';
import classes from "./Backdrop.module.css";


interface Props {
    clicked: () => void;
}

const Backdrop: FC<Props> = ({ clicked, children }) => {
    return (
        <motion.div
            className={classes.Backdrop}
            onClick={clicked}
        >
            {children}
        </motion.div>
    )
}

export default Backdrop;

