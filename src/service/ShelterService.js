import WebService from "./WebService";

const ShelterService = {
  postRegisterShelter(data) {
    return WebService.post('/shelters/register', data)
  },
  putUpdateShelter(data) {
    return WebService.put('/shelters', data)
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
