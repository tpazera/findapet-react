import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.scss";

const ModalComponent = ({ children, show, toggleModal, type, title }) => (
  <Modal show={show} onHide={() => toggleModal(type)}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>

    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalComponent;
