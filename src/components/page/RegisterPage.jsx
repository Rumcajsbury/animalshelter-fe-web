import React, { useState } from "react";
import { useHistory } from "react-router";
//styles
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import NavigationButton from "../common/NavigationButton";
import DonorService from "../../service/DonorService";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
//logic

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

const RegisterPage = ({ classes }) => {
  const history = useHistory();
  const [registerUser, setRegisterUser] = new useState({
    email: "",
    password: "",
    krSnumber: "",
    description: "",
    userType: ""
  });
  // const [userType, setUserType] = useState("");

  const handleChange = ({ target: { value, name } }) => {
    console.log(`${value + name}`);
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const register = e => {
    e.preventDefault();
    if (registerUser.userType === "Donor") {
      DonorService.postRegisterDonor({
        email: registerUser.email,
        password: registerUser.password
      })
        .then(response => {
          console.log("succesRegister");
          history.push("/login");
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    if (registerUser.userType === "Shelter") {
      DonorService.postRegisterDonor({
        email: registerUser.email,
        password: registerUser.password
      })
        .then(response => {
          console.log("succesRegister");
          history.push("/login");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h1>Zarejestruj się</h1>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={registerUser.email}
                onChange={handleChange}
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
                label="Password"
                type="password"
                id="password"
                value={registerUser.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Rola
                </InputLabel>
                <Select
                  name="userType"
                  value={registerUser.userType}
                  onChange={handleChange}
                >
                  <MenuItem value="Donor">Darczyńca</MenuItem>
                  <MenuItem value="Shelter">Schronisko</MenuItem>
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
            onClick={e => register(e)}
          >
            Zarejestruj się
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavigationButton route="login" label="Posiadasz już konot?" />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withStyles(styles)(RegisterPage);
