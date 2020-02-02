import React from "react";
import "./App.css";
import NavbarComponent from "./components/NavigationBar";
import StartPage from "./components/page/StartPage";
import {Switch, Route} from "react-router-dom";
import LoginPage from "./components/page/LoginPage";
import NotFoundPage from "./components/page/NotFoundPage";
import RegisterPage from "./components/page/RegisterPage";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavbarComponent isLoggedIn={false}/>
                <Switch>
                    <Route exact path="/" component={StartPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/register" component={RegisterPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
