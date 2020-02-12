import WebService from "./WebService";

const DonorService = {
  postRegisterDonor(data) {
    return WebService.post('/donor/register', data)
  },
  putUpdateDonor(data) {
    return WebService.put('/donor/details', data)
  },
  getDetailsDonor() {
      return WebService.get('/donor/details');
  },
  getActivateDonor(){}
};

export default DonorService;
