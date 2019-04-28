import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ children, show, toggleModal, type }) => (
  <Modal show={show} onHide={() => toggleModal(type)}>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>

    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalComponent;
