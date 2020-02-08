import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/NavigationBar";
import StartPage from "./components/page/StartPage";
import { Switch, Route } from "react-router-dom";
import {useHistory} from 'react-router';
import LoginPage from "./components/page/LoginPage";
import NotFoundPage from "./components/page/NotFoundPage";
import RegisterPage from "./components/page/RegisterPage";
import SheltersPage from "./components/page/SheltersPage/SheltersPage";
import PrivateRoute from './components/common/PrivateRoute';
import ProfilPage from "./components/page/ProfilPage/ProfilPage";
import SettingsPage from "./components/page/SettingsPage/SettingPage";

const App = () => {
  const [currentUser, setCurrentUser] = new useState({
    email: "",
    userType: "",
    isLoggedIn: false
  });
  const history = useHistory();

  const onUserLogIn = userData => {
    setCurrentUser({
      email: userData.email,
      userType: userData.userType,
      isLoggedIn: true
    });
    history.push('/shelters')
  };

  const onUserLogOut = () => {
    setCurrentUser({
      email: "",
      userType: "",
      isLoggedIn: false
    });

    window.localStorage.removeItem("token");
  };

  return (
    <div>
      <NavbarComponent
        isLoggedIn={currentUser.isLoggedIn}
        onUserLogOut={onUserLogOut}
      />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route
          exact
          path="/login"
          component={() => <LoginPage onUserLogIn={onUserLogIn} />}
        />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute path="/shelters" component={SheltersPage} isLoggedIn={currentUser.isLoggedIn} />
        <PrivateRoute path="/profil" component={ProfilPage} isLoggedIn={currentUser.isLoggedIn} />
        <PrivateRoute path="/settings" component={SettingsPage} isLoggedIn={currentUser.isLoggedIn} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
