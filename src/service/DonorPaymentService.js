import WebService from "./WebService";

const DonorPaymentService = {
  getAllPayments() {
    return WebService.get('/payment');
  },
  getAllPaymentsHistory() {
    let today = new Date();
    let startDate = new Date(2000, 1, 1, 0,0,0);    
    let month = today.getMonth() + 1;
    return WebService.get('/payment/history?startDate='+ startDate.getFullYear()+ "-"+ month  +"-" + startDate.getDate() + '&endDate='+ today.getFullYear()+ "-"+ month +"-" + today.getDate());
  },
  postOneTimePayment(shelterUserId, amount) {
    return WebService.post("/payment/onetime", {
      shelterUserId: shelterUserId,
      amount: amount
    });
  },
  postReguralPayment(shelterUserId, paymentType, dayOfMonth, amount) {
    return WebService.post("/payment", {
      shelterUserId: shelterUserId,
      paymentType: paymentType,
      dayOfMonth: dayOfMonth,
      amount: amount
    });
  },
  deleteRemovePayment(paymentId){
    return WebService.delete(`payment/${paymentId}`);
  }

};

export default DonorPaymentService;
