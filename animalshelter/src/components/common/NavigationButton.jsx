import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const NavigationButton = ({handleClick, route, label}) => {
    return (
        <Button
            color="inherit"
            component={Link}
            to={`/${route}`}
            onClick={handleClick}
        >
            {label}
        </Button>
    );
};

export default NavigationButton;
