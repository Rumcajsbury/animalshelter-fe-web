import React, {useEffect, useState} from "react";
import WebService from "../../../service/WebService";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import SheltersRow from "../SheltersPage/SheltersRow";
import {Link} from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {Home, Pets} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

class ShelterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelter: this.props.location.state.shelter
        };

        console.log(this.state);
    }

    render() {
        return (
            <Card className="container">
                <h3>{this.state.shelter?.ownerName}</h3>
                <h6>{this.state.shelter?.description}</h6>
                <img src={this.state.shelter?.mainPhoto}/>

                <List>
                    {this.state.shelter.animals.map((animal, i) => {
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
        )
    }
}

export default ShelterPage;
