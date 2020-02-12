import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/NavigationBar";
import StartPage from "./components/page/StartPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./components/page/LoginPage";
import NotFoundPage from "./components/page/NotFoundPage";
import RegisterPage from "./components/page/RegisterPage";
import SheltersPage from "./components/page/SheltersPage/SheltersPage";
import PrivateRoute from "./components/common/PrivateRoute";
import ProfilPage from "./components/page/ProfilPage/ProfilPage";
import SettingsPage from "./components/page/SettingsPage/SettingPage";
import UserContext from "./service/UserContext";
import { useHistory } from "react-router";
import ShelterPage from "./components/page/ShelterPage/ShelterPage";
import AnimalPage from "./components/page/AnimalPage";
import PaymentsPage from "./components/page/PaymentsPage/PaymentsPages";
import ShelterProfilePage from "./components/page/ShelterProfile/ShelterProfilePage";
import YourShelterPage from './components/page/YourShelterPage/YourShelterPage';

const App = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(UserContext.loggedIn());
  const onUserLogOut = () => {
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("currentUser");
  };
  const onUserLogIn = () => {
    setIsLoggedIn(true);
    history.push("/shelters");
  };

  return (
    <div>
      <NavbarComponent onUserLogOut={onUserLogOut} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route
          exact
          path="/login"
          component={() => <LoginPage onUserLogIn={onUserLogIn} />}
        />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute
          path="/shelters"
          component={SheltersPage}
          isLoggedIn={UserContext.loggedIn()}
        />
        {UserContext.userType() === "Donor" &&
        <PrivateRoute
          path="/profile"
          component={ProfilPage}
          isLoggedIn={UserContext.loggedIn()}
        />}
        {UserContext.userType() === "Shelter" &&
        <PrivateRoute
          path="/shelterProfile"
          component={ShelterProfilePage}
          isLoggedIn={UserContext.loggedIn()}
        />}{UserContext.userType() === "Shelter" &&
        <PrivateRoute
          path="/yourShelter"
          component={YourShelterPage}
          isLoggedIn={UserContext.loggedIn()}
        />}
        {UserContext.userType() === "Admin" && (
          <PrivateRoute
            path="/settings"
            component={SettingsPage}
            isLoggedIn={UserContext.loggedIn()}
          />
        )}
        <PrivateRoute
          path="/shelter"
          component={ShelterPage}
          isLoggedIn={UserContext.loggedIn()}
        />
        <PrivateRoute
          path="/animal"
          component={AnimalPage}
          isLoggedIn={UserContext.loggedIn()}
        />
        <PrivateRoute
          path="/payments"
          component={PaymentsPage}
          isLoggedIn={UserContext.loggedIn()}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
