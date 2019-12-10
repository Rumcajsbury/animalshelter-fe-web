import React from "react";
import StartLeftComponent from "./StartLeftComponent";
import StartRightComponent from "./StartRightComponent";

const StartPage: React.FC = () => {
  return (
        <div className="row">
          <div className="col-md-6">
            <StartLeftComponent />
          </div>
          <div className="col-md-6">
            <StartRightComponent />
          </div>
        </div>
  );
};

export default StartPage;
