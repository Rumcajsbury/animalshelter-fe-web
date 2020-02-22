import React, { useEffect, useState } from "react";
//styles
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import TableContainer from "@material-ui/core/TableContainer";
import Badge from "@material-ui/core/Badge";
//logic
import DonorPaymentService from "../../../service/DonorPaymentService";
import PaymentsDict from "../../../helpers/PaymentsDictionary";
import { TableBody, TableRow, TableCell, TableHead, Table } from "@material-ui/core";

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
        <Badge variant="standard">Twoje płatności</Badge>
      </h2>
      <TableContainer>
      <Table striped bordered hover>
      <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Schronisko</TableCell>
            <TableCell align="left">Wartość</TableCell>
            <TableCell align="left">Typ</TableCell>
            <TableCell align="left">Akcje</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((payment, i) => {
            return (
              <TableRow key={payment.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{payment.shelterUser.ownerName}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{PaymentsDict[payment.paymentType]}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() =>removePayment(payment.id)}>Anuluj</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </TableContainer>
    </Container>
  );
};

export default PaymentsPage;
