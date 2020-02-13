import React, { useEffect, useState } from "react";
import EditAnimalPopUpForm from "../../common/EditAnimalPopUpForm" ;
import WebService from "../../../service/WebService";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Home, Pets } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import UserContext from "../../../service/UserContext";
import DonationPopUpForm from "../../common/DontaionPopUpForm";
import Container from "react-bootstrap/Container";
//styles
import Badge from "react-bootstrap/Badge";
//logic
import AnimalsService from "../../../service/AnimalService";
import ShelterService from "../../../service/ShelterService";
import AnimalService from "../../../service/AnimalService";

const YourShelterPage = () => {
  const [shelter, setShelter] = useState();
  const [animals, setAnimals] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const managePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  useEffect(() => {
    AnimalsService.getAnimals()
      .then(({ data }) => {
        console.log(data);
        setAnimals(data);
      })
      .catch(error => console.log(error));
    ShelterService.getShelterDetails()
      .then(({ data }) => {
        console.log(data);
        setShelter(data);
      })
      .catch(error => console.log(error));
  }, []);

  const addAnimal = (newAnimal) =>{
    const animalToAdd = {
      name: newAnimal.name,
      age: newAnimal.age,
      description: newAnimal.description,
      active: true
    }
    AnimalService.postAddAnimal(animalToAdd).then(response => console.log(response)).catch(error => console.log(error))
    setAnimals([animalToAdd, ...animals]);
  }

  return (
    <>
    <Container>
      <h2>
        <Badge variant="secondary">
          Twoje schronisko: {shelter?.ownerName}
        </Badge>
        <Button style={{float: "right"}} color="primary">Dodaj zdjęcie</Button>
        <Button style={{float: "right"}} color="primary" onClick={managePopUp}>Dodaj zwierzę</Button>
      </h2>
      <h6>{shelter?.description}</h6>
      <img src={shelter?.mainPhoto} alt="mainPhoto" />
      <List>
        {animals.map((animal, i) => {
          return (
            <ListItem
            key={i}
              button
              component={Link}
              to={{
                pathname: "/animal",
                state: {
                  animal: animal
                }
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  <Pets />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={animal.name}
                secondary={animal.description}
              />
            </ListItem>
          );
        })}
      </List>
    </Container>
    {showPopUp && (
      <EditAnimalPopUpForm
        showModal={showPopUp}
        closeModal={managePopUp}
        animal={{}}
        saveAnimal={addAnimal}
        addAnimal={true}
      />
    )}
    </>
  );
};

export default YourShelterPage;
