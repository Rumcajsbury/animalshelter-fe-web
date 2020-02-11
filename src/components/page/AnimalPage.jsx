import Card from "@material-ui/core/Card";
import React from "react";

class AnimalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animal: this.props.location.state.animal
        };

        console.log(this.state);
    }

    render() {
        return (
            <Card className="container">
                <h3>{this.state.animal?.name}</h3>
                <h6>Age: {this.state.animal?.age}</h6>
                <h6>{this.state.animal?.description}</h6>
            </Card>
        )
    }
}

export default AnimalPage;
