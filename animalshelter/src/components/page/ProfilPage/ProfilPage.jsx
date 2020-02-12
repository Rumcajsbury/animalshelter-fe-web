import React, { useEffect, useState } from "react";
//styles
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//logic
import DonorService from "../../../service/DonorService";

const ProfilPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [disabledInputs, setDisabledInputs] = useState(true);
  useEffect(() => {
    DonorService.getDetailsDonor()
      .then(function({ data }) {
        console.log(data);
        setUserInfo(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const updateUser = () => {
    DonorService.putUpdateDonor(userInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <Container>
      <h2>
        <Badge variant="secondary">Twój profil</Badge>
      </h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={userInfo.email}
            disabled={disabledInputs}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Imię Nazwisko</Form.Label>
          <Form.Control
            value={userInfo.ownerName}
            disabled={disabledInputs}
            onChange={handleChange}
            name="ownerName"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Numer karty</Form.Label>
          <Form.Control
            value={userInfo.cardNumber}
            disabled={disabledInputs}
            onChange={handleChange}
            name="cardNumber"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Cvv</Form.Label>
          <Form.Control
            value={userInfo.cvv}
            disabled={disabledInputs}
            onChange={handleChange}
            name="cvv"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Data wygaśnięcia</Form.Label>
          <Form.Control
            value={userInfo.expirationDate}
            disabled={disabledInputs}
            onChange={handleChange}
            name="expirationDate"
          />
        </Form.Group>
        {disabledInputs && (
          <Button
            variant="primary"
            onClick={() => {
              setDisabledInputs(!disabledInputs);
            }}
          >
            Edytuj
          </Button>
        )}
        {!disabledInputs && (
          <Button
            variant="primary"
            onClick={() => {
              setDisabledInputs(!disabledInputs);
              updateUser();
            }}
          >
            Zapisz
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default ProfilPage;
