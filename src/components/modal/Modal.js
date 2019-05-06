import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./modal.scss";

const ModalComponent = ({ children, show, toggleModal, type }) => (
  <Modal show={show} onHide={() => toggleModal(type)}>
    <Modal.Header closeButton>
      <Modal.Title>Zaloguj się</Modal.Title>
    </Modal.Header>

    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalComponent;
