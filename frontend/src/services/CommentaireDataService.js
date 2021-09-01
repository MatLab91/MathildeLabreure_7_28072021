import http from "../http-common";

class CommentaireDataService {

  createCommentaire(data) {
    return http.post("/poste/commentaire", data);
  }
  getAllCommentaires() {
    return http.get("/poste/commentaire/:id");
  }
  modifyCommentaire(){
    return http.put("/poste/commentaire/:id");
  }
  deleteCommentaire(id) {
    return http.delete("/poste/commentaire/"+ id);
  }

}
export default new CommentaireDataService();