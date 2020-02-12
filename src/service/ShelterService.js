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
    let startDate = new Date(2000, 1, 1, 0,0,0);    
    let startMonth = startDate.getMonth()+1;
    let month = startDate.getMonth() + 1;
    return WebService.get('/shelters/income?startDate='+ startDate.getFullYear()+ "-"+ startMonth  +"-" + startDate.getDate() + '&endDate='+ today.getFullYear()+ "-"+ month +"-" + today.getDate());
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
