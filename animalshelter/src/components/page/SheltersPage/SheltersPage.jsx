import React, {useState, useEffect} from "react";
import SheltersRow from "./SheltersRow";
import WebService from '../../../service/WebService';

const SheltersPage = () => {
  let sheltersArray = [{name: "shelter", adress: "Krakow"}];

  const [shelters, setShelters] = useState(sheltersArray);

  useEffect(() =>{
    WebService.get("shelters",null ,)
      .then(function(response) {
        console.log(response);
        setShelters(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },[])


  return (
    <div className="container">
      <h2>Schroniska</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Schronisko</th>
            <th scope="col">Miasto</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shelters.map((shelter, i) => {
            return <SheltersRow shelter={shelter} key={i} index={i}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SheltersPage;
