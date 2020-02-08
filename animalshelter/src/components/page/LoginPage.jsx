import React, { useState } from "react";
import WebService from "../../service/WebService";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import NavigationButton from "../common/NavigationButton";
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%"
  }
});

const LoginPage = ({ classes, onUserLogIn }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userType: ""
  });

  const handleEmailChange = ({ target }) =>
    setUser({ ...user, email: target.value });
  const handlePasswordChange = ({ target }) =>
    setUser({ ...user, password: target.value });
  const handleUserTypeChange = ({ target }) =>
    setUser({ ...user, userType: target.value });

  const login = e => {
    e.preventDefault();
    WebService.post("auth", {
      email: user.email,
      password: user.password,
      userType: user.userType
    })
      .then(function(response) {
        window.localStorage.setItem("token", response.data.token);
        onUserLogIn({ email: user.email, userType: user.userType });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adres Email"
                value={user.email}
                onChange={handleEmailChange}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                value={user.password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Rola
                </InputLabel>
                <Select value={user.userType} onChange={handleUserTypeChange}>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Donor">Darczyńca</MenuItem>
                  <MenuItem value="ShelterUser">Użytkownik schroniska</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => login(e)}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavigationButton
                route="register"
                label="Don't have an account? Register here"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(LoginPage);
