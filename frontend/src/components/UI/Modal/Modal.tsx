import React, { FC, useRef } from 'react';
import ReactDom from 'react-dom';
import {
    XIcon
} from "@heroicons/react/solid";

import classes from './Modal.module.css';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const overlayRef = useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            onclose;
        }
    }

    const modalRoot = document.getElementById("portal") as HTMLElement;
    if (!isOpen) return null;

    return ReactDom.createPortal(

        <div className={classes.modal}>
            <div className={classes.overLay}
                ref={overlayRef}
                onClick={handleOverlayClick} />
            <div className={classes.modalBox}>
                <div className={classes.modalClose}>
                    <XIcon className="text-align-right h-2 w-2 text-gray-400" />
                </div>
            </div>
            <div className={classes.modalTitle}>
                {title}
            </div>
            <div className={classes.modalContent}>
                {children}
            </div>

        </div>
        , modalRoot
    )


}