import React, { FC, useRef } from 'react';
import ReactDom from 'react-dom';
import {
    XIcon
} from "@heroicons/react/solid";
import { Dialog, Transition } from '@headlessui/react'
import classes from './Modal.module.css';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }

    const modalRoot = document.getElementById("portal") as HTMLElement;
    if (!isOpen) return null;

    return ReactDom.createPortal(
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
        , modalRoot
    )


}

export default Modal;