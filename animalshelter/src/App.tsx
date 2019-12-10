import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/NavbarComponent";
import StartPage from "./components/StartPage/StartPage";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={StartPage}/>
      </Switch>
    </>
  );
};

export default App;
