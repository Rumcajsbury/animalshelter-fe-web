import React, { useEffect, useState } from "react";
//styles
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
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

  const removePayment = paymentId => {
    DonorPaymentService.deleteRemovePayment(paymentId)
      .then(response => {
        let array = [...payments];
        let index = array.findIndex((item) => item.id === paymentId)
        array.splice(index, 1)
        setPayments(array.splice(index, 1));
      })
      .catch(error => console.log(error));
  };
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
            <th>Usuń wpłaty</th>
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
                <td>
                  <Button variant="primary" onClick={() =>removePayment(payment.id)}>Anuluj</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaymentsPage;
