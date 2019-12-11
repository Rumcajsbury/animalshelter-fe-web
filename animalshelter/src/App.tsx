import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/NavbarComponent";
import StartPage from "./components/StartPage/StartPage";
import { Switch, Route } from "react-router-dom";
import LoginRegisterPage from "./components/LoginRegisterPage/LoginRegisterPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
      <div className="App">
      <NavbarComponent isLoggedIn={false} />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/login" component={LoginRegisterPage} />
        <Route exact path="/register" component={LoginRegisterPage} />
        <Route component={NotFoundPage}/>
      </Switch>
      </div>
  );
};

export default App;
