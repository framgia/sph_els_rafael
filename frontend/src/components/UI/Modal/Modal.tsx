import React, { FC } from 'react';
import ReactDom from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

interface ModalProps {
    title: string | React.ReactElement;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {

    const modalRoot = document.getElementById("portal") as HTMLElement;
    if (!isOpen) return null;

    return ReactDom.createPortal(
        <>
            <Backdrop show={isOpen} clicked={onClose} />
            <div
                className={classes.Modal}
                style={{
                    transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
                    opacity: isOpen ? "1" : "0"
                }}
            >
                <h2 className={classes.title}>{title}</h2>
                {children}
            </div>
        </>
        , modalRoot
    )


}

export default Modal;

