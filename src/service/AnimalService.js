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
  postAnimalImage(data) {
    const headers = {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        'Content-Type': "multipart/form-data"
      }
    };
    return WebService.postWithHeaders("animals/image", data, headers);
  },
  patchActivateAnimal() {
    //to implement
  },
  getAnimalsByShelterId(shelterId) {
    return WebService.get(`/animals/${shelterId}`);
  }
};

export default AnimalService;
