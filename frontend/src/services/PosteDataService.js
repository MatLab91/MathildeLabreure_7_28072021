import http from "../http-common";

class PosteDataService {

  create(data) {
    return http.post("/addPoste", data);
  }
  getAllPostes() {
    return http.get("/postes");
  }
  deletePoste(id) {
    return http.delete("/postes/"+ id);
  }
  modifyPoste(id) {
    return http.update("/postes/"+ id);
  }

}
export default new PosteDataService();

