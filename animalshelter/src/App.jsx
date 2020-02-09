import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/NavigationBar";
import StartPage from "./components/page/StartPage";
import { Switch, Route } from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import {useHistory} from "react-router";
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


const App = () => {
    const history = useHistory();


  const [isLoggedIn, setIsLoggedIn] = useState(UserContext.loggedIn());
  const onUserLogOut = () => {
    window.localStorage.removeItem("token");
    window.sessionStorage.removeItem("currentUser");
  };
  const onUserLogIn = () => {
    setIsLoggedIn(true);
    history.push('/shelters');
  };

  return (
    <div>
      <NavbarComponent onUserLogOut={onUserLogOut} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route
          exact
          path="/login"
          component={() =><LoginPage onUserLogIn={onUserLogIn} />}
        />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute
          path="/shelters"
          component={SheltersPage}
          isLoggedIn={UserContext.loggedIn()}
        />
        <PrivateRoute
          path="/profil"
          component={ProfilPage}
          isLoggedIn={UserContext.loggedIn()}
        />
        <PrivateRoute
          path="/settings"
          component={SettingsPage}
          isLoggedIn={UserContext.loggedIn()}
        />
=======
    useEffect(() => {
        let user = JSON.parse(window.sessionStorage.getItem('currentUser'));
        console.log(user);
        if (user !== null) {
            onUserLogIn({email: user.email, userType: user.userType});
        }
    }, []);

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
            <NavbarComponent onUserLogOut={onUserLogOut}/>
            <Switch>
                <Route exact path="/" component={StartPage}/>
                <Route
                    exact
                    path="/login"
                    component={() => <LoginPage onUserLogIn={onUserLogIn}/>}
                />
                <Route exact path="/register" component={RegisterPage}/>
                <Route
                    exact path="/shelter"
                    component={ShelterPage}/>
                <Route
                    exact path="/animal"
                    component={AnimalPage}/>
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


                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;
