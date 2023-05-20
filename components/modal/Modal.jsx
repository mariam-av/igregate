import React, { useState } from "react";
import Modal from "react-modal";
import { ModalTitle, StyledModal } from "./Modal.style";

const ModalBase = ({ children, title }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>open modal</button>
      <Modal
        style={{
          content: {
            borderRadius: "22px",
            background: "#F9F9FF",
            width: "1364px",
            height: "1890px",
            padding: 0
          }
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <ModalTitle>{title}</ModalTitle>
        {children}
      </Modal>
    </div>
  );
};

export { ModalBase };
