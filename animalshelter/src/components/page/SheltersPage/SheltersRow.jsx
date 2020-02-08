import React from "react";
import UserContex from "../../../service/UserContext";
import { Button } from "@material-ui/core";

const SheltersRow = ({ shelter, index }) => {
  let edit;
  if (UserContex.userType === "Admin") edit = <td>Edcyja</td>;
  console.log(UserContex.userType)
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{shelter.ownerName}</td>
      <td>{shelter.adress}</td>
      <td>Szczegóły</td>
      <td><Button>Wpłaty</Button></td>
      {edit}
    </tr>
  );
};

export default SheltersRow;
