import React, {useState} from "react";
import SheltersRow from "./SheltersRow";

const SheltersPage = () => {
  let sheltersArray = [{name: "shelter", adress: "Krakow"}];

  const [shelters, setShelters] = useState(sheltersArray);

  return (
    <div className="container">
      <h2>Schroniska</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Schronisko</th>
            <th scope="col">Adress</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shelters.map((shelter, i) => {
            return <SheltersRow shelter={shelter} key={i}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SheltersPage;
