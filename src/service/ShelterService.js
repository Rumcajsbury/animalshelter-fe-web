import WebService from "./WebService";

const ShelterService = {
  postRegisterShelter(data) {
    return WebService.post('/shelters/register', data)
  },
  putUpdateShelter(data) {
    return WebService.put('/shelters', data)
  },
  getAllPaymentsHistory() {
    let today = new Date();
    let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0,0,0);    
    return WebService.get('/shelters/income?startDate='+ startDate + '&endDate='+ today);
  },
  getShelters() {
      return WebService.get('/shelters');
  },
  postShelterImage(data){
    return WebService.post('/shelters/image');
  },
  patchVerifyShelter(){
      //need implementation
  },
  getShelterIncomes(){
    return WebService.post('/shelters/income');
  }
};

export default ShelterService;
