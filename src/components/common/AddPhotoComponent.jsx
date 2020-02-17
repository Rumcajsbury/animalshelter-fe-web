import React, { useState } from "react";
//styles
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPhotoComponent = ({ showModal, managePopUp }) => {
  let uploadFile = {};
  const changeFile = ({ target }) => {
    uploadFile = target.files[0];
    console.log(uploadFile);
  };

  const uploadPhoto = () => {};

  return (
    <Modal show={showModal} onHide={managePopUp}>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj zdjęcie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="photo">
            <Form.Label>Wybierz plik</Form.Label>
            <Form.Control type="file" name="photo" onChange={changeFile} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={managePopUp}>
          Wróć
        </Button>
        <Button variant="primary" type="submit" onClick={uploadPhoto}>
          Dodaj
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPhotoComponent;
