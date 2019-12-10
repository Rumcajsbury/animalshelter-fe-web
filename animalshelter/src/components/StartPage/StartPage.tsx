import React from "react";
import logo from "../../logo.svg";
import StartLeftComponent from "./StartLeftComponent";

const StartPage: React.FC = () => {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="col-md-6">
            <StartLeftComponent />
          </div>
          <div className="col-md-6">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
