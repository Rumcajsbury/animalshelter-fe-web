import React from "react";
import UserContext from "../../../service/UserContext";
import {Home} from "@material-ui/icons";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {Button} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

const SheltersRow = ({shelter, index}) => {
    let edit;
    if (UserContext.userType === "Admin") edit = <td>Edytuj</td>;
    console.log(UserContext.userType);

    return (
        <ListItem button
                  component={Link} to={{
            pathname: '/shelter',
            state: {
                shelter: shelter
            }
        }}
        >
            <ListItemAvatar>
                <Avatar>
                    <Home/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={shelter.ownerName} secondary={shelter.description}/>
            <ListItemText primary={shelter.city + " " + shelter.street + " " + shelter.buildingNumber}/>
            {UserContext.userType() === "Admin" &&  <Button color="inherit" component={Link} to={`/profile`}>Edytuj</Button>}
        </ListItem>
    );
};

export default SheltersRow;
