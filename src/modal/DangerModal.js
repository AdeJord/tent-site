import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    Root,
    DangerModalRoot,
    DangerModalHeader,
    DangerModalContent,
    DangerModalFooter,
    Button,
    ButtonContainer
} from "../styles";
import Modal from "./Modal";

const DangerModal = ({ onClick, header, content, footer }) => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const modalContent = (
        <Root>
            <DangerModalRoot>
                <div onClick={onClick}>
                    <div>
                        <DangerModalHeader><h3>{header}</h3></DangerModalHeader>
                        <DangerModalContent>{content}</DangerModalContent>
                        <DangerModalFooter>{footer}</DangerModalFooter>
                    </div>
                </div>
            </DangerModalRoot>
        </Root>
    );

    return ReactDOM.createPortal(modalContent, document.getElementById('modal-hook'));
};

export default DangerModal;
