import React, { useState } from "react";
//styles
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//logic
import DonorPaymentService from "../../service/DonorPaymentService";

const DonationPopUpForm = ({
  closePopUp,
  showModal,
  closeModal,
  shelterId
}) => {
  const [paymentOptions, setPaymentOptions] = useState({
    amount: 0,
    paymentType: ""
  });
  const onAmountChange = ({ target }) => {
    setPaymentOptions({ ...paymentOptions, amount: target.value });
  };
  const onPaymentTypeChange = ({ target }) => {
    setPaymentOptions({ ...paymentOptions, paymentType: target.value });
  };
  const submitPayment = () => {
    if (paymentOptions.paymentType === "once") {
      DonorPaymentService.postOneTimePayment(shelterId, paymentOptions.amount)
        .then(response => {
          console.log("onetime");
          console.log(response);
          closeModal();
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      DonorPaymentService.postReguralPayment(
        shelterId,
        paymentOptions.paymentType,
        1,
        paymentOptions.amount
      )
        .then(response => {
          console.log(response);
          closeModal();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="amount">
            <Form.Label>Kwota</Form.Label>
            <Form.Control
              type="number"
              placeholder="Kwota"
              onChange={onAmountChange}
            />
          </Form.Group>
        </Form>
        <Form.Group controlId="paymentType">
          <Form.Label>Częstotliwość</Form.Label>
          <Form.Control as="select" onChange={onPaymentTypeChange}>
            <option value=""></option>
            <option value="once">Jednorazowo</option>
            <option value="daily">Dziennie</option>
            <option value="monthly">Miesięcznie</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Wróć
        </Button>
        <Button variant="primary" type="submit" onClick={submitPayment}>
          Zrób dotację
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DonationPopUpForm;
