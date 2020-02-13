import React, { useState } from "react";
//styles
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//logic

const EditAnimalPopUpForm = ({
  closePopUp,
  showModal,
  closeModal,
  animal,
  saveAnimal,
  addAnimal
}) => {
    const [animalState, setAnimalState] = useState(animal);
  const handleChange = ({target: {value, name}})=>{
    setAnimalState({...animalState, [name]: value})
  }
  const save = () =>{
      saveAnimal(animalState);
      closeModal();
  }

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
          {addAnimal &&  <Modal.Title>Dodaj zwierzę</Modal.Title>}
          {!addAnimal &&  <Modal.Title>Edytuj zwierzę</Modal.Title>}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Imię</Form.Label>
            <Form.Control
                value={animalState.name}
              type="string"
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
        </Form>
        <Form.Group controlId="description">
          <Form.Label>Opis</Form.Label>
          <Form.Control
                value={animalState.description}
              type="string"
              onChange={handleChange}
              name="description"
            />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Wiek</Form.Label>
          <Form.Control
                value={animalState.age}
              type="string"
              onChange={handleChange}
              name="age"
            />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Wróć
        </Button>
          <Button variant="primary" type="submit" onClick={save}>
          Zapisz
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAnimalPopUpForm;
