import http from "../http-common";

class CommentaireDataService {

  createCommentaire(data) {
    return http.post("/poste/commentaire", data);
  }
  getAllCommentaires() {
    return http.get("/poste/commentaire");
  }
  getCommentairesByPoste(posteId) {
    return http.get("/poste/commentaire/" + posteId);
  }
  modifyCommentaire(id){
    return http.put("/poste/commentaire/" +id);
  }
  deleteCommentaire(id) {
    return http.delete("/poste/commentaire/"+ id);
  }

}
export default new CommentaireDataService();