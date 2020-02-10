import WebService from "./WebService";

const DonorPaymentService = {
  getAllPayments() {},
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
  }
};

export default DonorPaymentService;
