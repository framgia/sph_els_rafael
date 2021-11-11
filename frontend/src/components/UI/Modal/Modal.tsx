import React, { FC } from 'react';
import ReactDom from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';
import { motion } from 'framer-motion';

interface ModalProps {
    title: string | React.ReactElement;
    isOpen: boolean;
    onClose: () => void;
}

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    }, visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.05,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    }, exit: {
        y: "100vh",
        opacity: 0,
    }
}

const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {

    const modalRoot = document.getElementById("portal") as HTMLElement;
    if (!isOpen) return null;
    return ReactDom.createPortal(
        <Backdrop clicked={onClose}>
            <motion.div
                className={classes.Modal}
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                inherit={false}
            >
                <h2 className={classes.title}>{title}</h2>
                {children}
            </motion.div>
        </Backdrop>
        , modalRoot
    )
}

export default Modal;

