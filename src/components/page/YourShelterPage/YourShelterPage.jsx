import React, { useEffect, useState } from "react";
import WebService from "../../../service/WebService";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import { Button } from "@material-ui/core";
import SheltersRow from "../SheltersPage/SheltersRow";
import { Link } from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Home, Pets } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import UserContext from "../../../service/UserContext";
import DonationPopUpForm from "../../common/DontaionPopUpForm";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

//logic
import AnimalsService from "../../../service/AnimalService";

const YourShelterPage = () => {
  const [shelter, setShelter] = useState();
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    AnimalsService.getAnimals()
      .then(({ data }) => {
        console.log(data);
        setAnimals(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <h2>
        <Badge variant="secondary">Twoje schronisko</Badge>
      </h2>
    </Container>

    /* <Card className="container">
                <h3>{shelter?.ownerName}</h3>
                    {UserContext.userType() === "Donor" &&  <Button style={{float: "right"}} color="inherit" onClick={managePopUp}>Zrób dotację</Button>}

                <h6>{shelter?.description}</h6>
                <img src={shelter?.mainPhoto} alt="mainPhoto"/>

                <List>
                    {shelter.animals.map((animal, i) => {
                        return <ListItem button
                                         component={Link} to={{
                            pathname: '/animal',
                            state: {
                                animal: animal
                            }
                        }}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <Pets/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={animal.name} secondary={animal.description}/>
                        </ListItem>;
                    })}
                </List>
            </Card>
                {showPopUp && <DonationPopUpForm showModal={showPopUp} closeModal={managePopUp} shelterId={shelter.id} />} */
  );
};

export default YourShelterPage;
