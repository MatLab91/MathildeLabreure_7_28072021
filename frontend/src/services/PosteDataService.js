import http from "../http-common";

class PosteDataService {

  create(data) {
    return http.post("/addPoste", data);
  }
  getAllPostes() {
    return http.get("/postes");
  }
  deletePoste() {
    return http.delete("/postes/:id");
  }

}
export default new PosteDataService();

