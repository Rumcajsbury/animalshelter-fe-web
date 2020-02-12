import React, { useEffect, useState } from "react";
//styles
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//logic
import ShelterService from "../../../service/ShelterService";

const ShelterProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [disabledInputs, setDisabledInputs] = useState(true);
  useEffect(() => {
    ShelterService.getShelterDetails()
      .then(function({ data }) {
        console.log(data);
        setUserInfo(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const updateUser = () => {
    ShelterService.putUpdateShelter(userInfo)
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
        <Badge variant="secondary">Twój profil schroniska</Badge>
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
          <Form.Label>Nazwa schroniska</Form.Label>
          <Form.Control
            value={userInfo.ownerName}
            disabled={disabledInputs}
            onChange={handleChange}
            name="ownerName"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>IBAN</Form.Label>
          <Form.Control
            value={userInfo.iban}
            disabled={disabledInputs}
            onChange={handleChange}
            name="iban"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Swift</Form.Label>
          <Form.Control
            value={userInfo.swift}
            disabled={disabledInputs}
            onChange={handleChange}
            name="swift"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>KRS</Form.Label>
          <Form.Control
            value={userInfo.krsNumber}
            disabled={disabledInputs}
            onChange={handleChange}
            name="krsNumber"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            value={userInfo.description}
            disabled={disabledInputs}
            onChange={handleChange}
            name="description"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            value={userInfo.country}
            disabled={disabledInputs}
            onChange={handleChange}
            name="country"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Kod Pocztowy</Form.Label>
          <Form.Control
            value={userInfo.postalCode}
            disabled={disabledInputs}
            onChange={handleChange}
            name="postalCode"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Miasto</Form.Label>
          <Form.Control
            value={userInfo.city}
            disabled={disabledInputs}
            onChange={handleChange}
            name="city"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Miasto</Form.Label>
          <Form.Control
            value={userInfo.street}
            disabled={disabledInputs}
            onChange={handleChange}
            name="street"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Numer budynku/lokalu</Form.Label>
          <Form.Control
            value={userInfo.buildingNumber}
            disabled={disabledInputs}
            onChange={handleChange}
            name="buildingNumber"
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

export default ShelterProfilePage;
