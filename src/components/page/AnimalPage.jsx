import React, { useState } from "react";
import EditAnimalPopUpForm from "../common/EditAnimalPopUpForm";
import AddPhotoComponent from "../common/AddPhotoComponent";
//styles
import Card from "@material-ui/core/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
//logic
import AnimalService from "../../service/AnimalService";
import UserContext from "../../service/UserContext";

const AnimalPage = ({ location }) => {
  const [animal, setAnimal] = useState(location.state.animal);
  const [showPopUp, setShowPopUp] = useState(false);
  const [addPhotoPopUp, setAddPhotoPopUp] = useState(false);

  const managePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  const manageAddPhotoPopUp = () => {
    setAddPhotoPopUp(!addPhotoPopUp);
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
    console.log(updateAnimal);
    setAnimal(updateAnimal);
  };
  console.log(location.state)
  console.log(UserContext.userType());
  return (
    <>
      <Card className="container">
        <h3>{animal?.name}</h3>
        {UserContext.userType() === "Shelter" && (
          <>
            <Button style={{ float: "right" }}>Dodaj zdjęcie</Button>
            <Button style={{ float: "right" }} variant="primary">
            {/* <Button style={{ float: "right" }} variant="primary" onClick={location.state.deleteAnimal(animal.id)}> */}
              Usuń
            </Button>
            <Button style={{ float: "right" }} onClick={managePopUp}>
              Edytuj zwierzę
            </Button>
          </>
        )}
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
      {addPhotoPopUp && (
        <AddPhotoComponent
          managePopUp={manageAddPhotoPopUp}
          showModal={addPhotoPopUp}
        />
      )}
    </>
  );
};

export default AnimalPage;
