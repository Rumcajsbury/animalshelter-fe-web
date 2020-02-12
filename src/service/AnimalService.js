import WebService from "./WebService";

const AnimalService = {
  postAddAnimal(data) {
    return WebService.post("/animals", data);
  },
  putUpdateAnimal(data) {
    return WebService.put("/animals", data);
  },
  getAnimals() {
    return WebService.get("/animals");
  },
  postAnimalImage() {
    return WebService.post("animals/image");
  },
  patchActivateAnimal() {
    //to implement
  },
  getAnimalsByShelterId(shelterId) {
    return WebService.get(`/animals/${shelterId}`);
  }
};

export default AnimalService;
