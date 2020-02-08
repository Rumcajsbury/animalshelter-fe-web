import React from "react";
import NavigationButton from "./common/NavigationButton";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    edge: "start"
  }
});

const NavigationBar = ({classes, isLoggedIn, onUserLogOut}) =>{

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" component={Link} to={`/`}>
              ShenAn
            </Button>
          </Typography>
          {!isLoggedIn && (
            <div>
              <NavigationButton route="login" label="Zaloguj się" />
              <NavigationButton route="register" label="Zarejestruj się" />
            </div>
          )}
          {isLoggedIn && (
            <div>
              <NavigationButton route="shelters" label="Schroniska" />
              <NavigationButton route="profil" label="Profil" />
              <NavigationButton route="settings" label="Ustawienia" />
              <NavigationButton route="login" label="Wyloguj się" handleClick={onUserLogOut} />
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
}

export default withStyles(styles)(NavigationBar);
