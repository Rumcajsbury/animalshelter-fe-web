import React from "react";
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
    width: "100%",
  }
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userType: ""
    };

    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleUserTypeChange(event) {
    this.setState({ userType: event.target.value });
  }

  login(e) {
    e.preventDefault();
    WebService.post("auth", {
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
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
                  value={this.state.email}
                  onChange={this.handleEmailChange}
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
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Role
                  </InputLabel>
                  <Select
                  value={this.state.userType}
                  onChange={this.handleUserTypeChange}
                  >
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
              onClick={e => this.login(e)}
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
  }
}

export default withStyles(styles)(LoginPage);
