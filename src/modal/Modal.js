import React from "react";
import ReactDOM from "react-dom";
import { 
    Root,
    ModalRoot, 
    ModalHeader, 
    ModalContent, 
    ModalFooter 
} from "../styles";

const Modal = ({ onClick, header, content, footer }) => {
    const modalContent = (
        <Root>
            <ModalRoot onClick={onClick}>
                <div>
                    <ModalHeader><h3>{header}</h3></ModalHeader>
                    <ModalContent>{content}</ModalContent>
                    <ModalFooter>{footer}</ModalFooter>
                </div>
            </ModalRoot>
        </Root>
    );

    return ReactDOM.createPortal(modalContent, document.getElementById('modal-hook'));
};

export default Modal;
