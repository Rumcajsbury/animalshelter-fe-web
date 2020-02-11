import React, {useState, useEffect} from "react";
import SheltersRow from "./SheltersRow";
import WebService from '../../../service/WebService';
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";

const SheltersPage = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() =>{
      WebService.get("shelters", null,)
          .then(function (response) {
              console.log(response);
              setShelters(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });
  },[]);

  return (
    <Card className="container">
      <h3>Schroniska</h3>
      <List>
          {shelters.map((shelter, i) => {
            return <SheltersRow shelter={shelter} key={i} index={i}/>;
          })}
      </List>
    </Card>
  );
};

export default SheltersPage;
