import React from "react";

const SheltersRow = (props) => {
  console.log(props);
  return (
    <tr>
      <th scope="row">{props.key}</th>
      <td>{props.shelter.name}</td>
      <td>{props.adress}</td>
      <td>Details</td>
    </tr>
  );
};

export default SheltersRow;
