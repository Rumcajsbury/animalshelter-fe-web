import React from "react";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

class NavigationButton extends React.Component {
    render() {
        return (
            <Button color="inherit" component={Link} to={`/${this.props.route}`}>
                {this.props.label}
            </Button>
        );
    }
}

export default NavigationButton;
