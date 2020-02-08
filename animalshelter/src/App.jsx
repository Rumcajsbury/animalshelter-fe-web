import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/NavigationBar";
import StartPage from "./components/page/StartPage";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import LoginPage from "./components/page/LoginPage";
import NotFoundPage from "./components/page/NotFoundPage";
import RegisterPage from "./components/page/RegisterPage";
import SheltersPage from "./components/page/SheltersPage/SheltersPage";
import PrivateRoute from "./components/common/PrivateRoute";
import ProfilPage from "./components/page/ProfilPage/ProfilPage";
import SettingsPage from "./components/page/SettingsPage/SettingPage";
import UserContext from "./service/UserContext";

const App = () => {
  const history = useHistory();

  useEffect(() =>{
    let user = JSON.parse(window.sessionStorage.getItem('currentUser'));
    console.log(user);
    if(user != null)
    {
      UserContext.userType = user.role;
      UserContext.email = user.email;
      UserContext.loggedIn = true;
      console.log(UserContext);
    }
  },[]);

  const onUserLogIn = userData => {
    UserContext.onUserLogIn(userData);
    history.push("/shelters");
  };

  const onUserLogOut = () => {
    UserContext.onUserLogOut();
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("currentUser");
  };

  return (
    <div>
      <NavbarComponent onUserLogOut={onUserLogOut} />
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
          isLoggedIn={UserContext.loggedIn}
        />
        <PrivateRoute
          path="/profil"
          component={ProfilPage}
          isLoggedIn={UserContext.loggedIn}
        />
        <PrivateRoute
          path="/settings"
          component={SettingsPage}
          isLoggedIn={UserContext.loggedIn}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
