import React from "react";
import NavigationButton from "./common/NavigationButton";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        edge: "start"
    },
});

class NavigationBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button color="inherit" component={Link} to={`/`}>
                            ShenAn
                        </Button>
                    </Typography>
                    {!this.props.isLoggedIn && (
                        <div>
                            <NavigationButton route="login" label="Zaloguj się"/>
                            <NavigationButton route="register" label="Zarejestruj się"/>
                        </div>
                    )}
                    {this.props.isLoggedIn && (
                        <div>
                            <NavigationButton route="login" label="Schroniska"/>
                            <NavigationButton route="login" label="Profil"/>
                            <NavigationButton route="login" label="Ustawienia"/>
                            <NavigationButton route="register" label="Wyloguj się"/>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(NavigationBar);
