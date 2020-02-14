import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPhotoPopupForm = ({
                               closePopUp,
                               showModal,
                               closeModal,
                               sendPhoto
                           }) => {
    const [file, setFile] = useState({
        file: null
    });
    const onFileChange = ({target}) => {
        setFile({...file, file: target.files[0]})
    };

    const submitPhoto = () => {
        sendPhoto(file);
    };

    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Dodaj zdjęcie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="photo">
                        <Form.Label>Zdjęcie</Form.Label>
                        <Form.Control
                            type="file"
                            accept=".jpg"
                            placeholder="zdjęcie"
                            onChange={onFileChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Wróć
                </Button>
                <Button variant="primary" type="submit" onClick={submitPhoto}>
                    Dodaj zdjęcie
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddPhotoPopupForm;
