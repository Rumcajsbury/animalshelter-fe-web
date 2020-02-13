import React, { useState } from "react";
import EditAnimalPopUpForm from "../common/EditAnimalPopUpForm";
//styles
import Card from "@material-ui/core/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
//logic
import AnimalService from "../../service/AnimalService";

const AnimalPage = ({ location }) => {
  const [animal, setAnimal] = useState(location.state.animal);
  const [showPopUp, setShowPopUp] = useState(false);
  const managePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  const saveAnimalChanges = updateAnimal => {
    AnimalService.putUpdateAnimal({
      name: updateAnimal.name,
      age: updateAnimal.age,
      description: updateAnimal.description,
      animalId: updateAnimal.id
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
      console.log(updateAnimal)
    setAnimal(updateAnimal);
  };
  return (
    <>
      <Card className="container">
        <h3>{animal?.name}</h3>
        <Button style={{ float: "right" }} onClick={managePopUp}>
          Edytuj zwierzę
        </Button>
        <Button style={{ float: "right" }}>Dodaj zdjęcie</Button>
        <h6>Age: {animal?.age}</h6>
        <h6>{animal?.description}</h6>
        {animal.images?.map(img => (
          <Image src={img} thumbnail />
        ))}
      </Card>
      {showPopUp && (
        <EditAnimalPopUpForm
          showModal={showPopUp}
          closeModal={managePopUp}
          animal={animal}
          saveAnimal={saveAnimalChanges}
        />
      )}
    </>
  );
};

export default AnimalPage;
