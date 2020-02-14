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
import AddPhotoPopupForm from "../common/AddPhotoPopupForm";
import ShelterService from "../../service/ShelterService";

const AnimalPage = ({ location }) => {
  const [animal, setAnimal] = useState(location);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showPhotoPopUp, setShowPhotoPopUp] = useState(false);
  const managePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const managePhotoPopUp = () => {
    setShowPhotoPopUp(!showPhotoPopUp);
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

  const sendAnimalPhoto = (photo) => {
    const data = new FormData();
    data.append('FormFile', photo.file);
    data.append("AnimalId", location.state.animal.id);
    AnimalService.postAnimalImage(data)
        .then(response => {
          console.log(response);
          managePhotoPopUp();
        })
        .catch(error => console.log(error));
  };

  console.log(animal)

  return (
    <>
      <Card className="container">
        <h3>{animal.state.animal?.name}</h3>
        {UserContext.userType() === "Shelter" && (
          <Button style={{ float: "right" }} onClick={managePopUp}>
            Edytuj zwierzę
          </Button>
        )}
        {UserContext.userType() === "Shelter" && (
          <Button style={{ float: "right" }} onClick={managePhotoPopUp}>Dodaj zdjęcie</Button>
        )}
        <h6>Age: {animal.state.animal?.age}</h6>
        <h6>{animal.state.animal?.description}</h6>
        {animal.state.animal.images?.map(img => (
          <Image width={100} src={img.path} thumbnail />
        ))}
      </Card>
      {showPopUp && (
        <EditAnimalPopUpForm
          showModal={showPopUp}
          closeModal={managePopUp}
          animal={animal.state.animal}
          saveAnimal={saveAnimalChanges}
        />
      )}
      {showPhotoPopUp && (
          <AddPhotoPopupForm
              showModal={showPhotoPopUp}
              closeModal={managePhotoPopUp}
              sendPhoto={sendAnimalPhoto}
          />
      )}
    </>
  );
};

export default AnimalPage;
