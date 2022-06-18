import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop} />
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modal = props => {
    const modalRoot = document.getElementById('overlays');
    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClick}/>, modalRoot)}
            {ReactDOM.createPortal(
            <ModalOverlay>
                {props.children}
            </ModalOverlay>, modalRoot)}
        </>
    )
}

export default Modal;