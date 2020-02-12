import React, { useEffect, useState } from "react";
//styles
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
//logic
import DonorPaymentService from "../../../service/DonorPaymentService";
import ShelterService from "../../../service/ShelterService";
import PaymentsDict from "../../../helpers/PaymentsDictionary";
import UserContext from '../../../service/UserContext';

const PaymentsHistoryPage = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {    
    if(UserContext.userType() === "Donor"){
    DonorPaymentService.getAllPaymentsHistory()
      .then(response => {
        console.log(response);
        setHistory(response.data.paymentRecords);
      })
      .catch(function(error) {
        console.log(error);
      });
    }else if(UserContext.userType() === "Shelter"){
      ShelterService.getAllPaymentsHistory()
        .then(response => {
          console.log(response);
          setHistory(response.data.paymentRecords);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
  }, []);
  return (
    <Container>
      <h2>
        <Badge variant="secondary">Historia płatności</Badge>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {UserContext.userType === "Donor" && <th>Schronisko</th>}
            <th>Kwota(PLN)</th>
            <th>Rodzaj wpłaty</th>
            <th>Data wpłaty</th>
          </tr>
        </thead>
        <tbody>
          {history.map((payment, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                {UserContext.userType === "Donor" && <td>{payment.shelterUserName}</td>}
                <td>{payment.amount}</td>
                <td>{PaymentsDict[payment.paymentType]}</td>
                <td>{payment.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentsHistoryPage;
