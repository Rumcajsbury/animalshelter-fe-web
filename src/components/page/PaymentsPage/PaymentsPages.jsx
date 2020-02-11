import React, { useEffect, useState } from "react";
//styles
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
//logic
import DonorPaymentService from "../../../service/DonorPaymentService";
import PaymentsDict from "../../../helpers/PaymentsDictionary";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    DonorPaymentService.getAllPayments()
      .then(response => {
        console.log(response);
        setPayments(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <h2>
        <Badge variant="secondary">Twoje płatności</Badge>
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Schronisko</th>
            <th>Kwota(PLN)</th>
            <th>Rodzaj wpłaty</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{payment.shelterUser.ownerName}</td>
                <td>{payment.amount}</td>
                <td>{PaymentsDict[payment.paymentType]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentsPage;
