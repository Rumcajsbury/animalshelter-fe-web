import React from "react";
import NavigationButton from "./common/NavigationButton";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import UserContext from "../service/UserContext";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    edge: "start"
  }
});

const NavigationBar = ({ classes, onUserLogOut, isLoggedIn }) => {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        {!UserContext.loggedIn() && <Button color="inherit" component={Link} to={`/`}>ShenAn</Button>}
        {(UserContext.loggedIn() && UserContext.userType() === "Donor") && <Button color="inherit" component={Link} to={`/profile`}>{UserContext.email()}</Button>}
        {(UserContext.loggedIn() && UserContext.userType() === "Shelter") && <Button color="inherit" component={Link} to={`/shelterProfile`}>{UserContext.email()}</Button>}
        </Typography>
        {!UserContext.loggedIn() && (
          <div>
            <NavigationButton route="login" label="Zaloguj się" />
            <NavigationButton route="register" label="Zarejestruj się" />
          </div>
        )}
        {UserContext.loggedIn() && (
          <div>
            {UserContext.userType() === "Donor" &&<NavigationButton route="shelters" label="Schroniska" />}
            {UserContext.userType() === "Shelter" &&<NavigationButton route="yourShelter" label="Twoje schronisko" />}
            {UserContext.userType() === "Donor" && <NavigationButton route="payments" label="Płatności" />}
            {UserContext.userType() === "Admin" &&
            <NavigationButton route="settings" label="Ustawienia" />}
            <NavigationButton
              route="login"
              label="Wyloguj się"
              handleClick={onUserLogOut}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavigationBar);
