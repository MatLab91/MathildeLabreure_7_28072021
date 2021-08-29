import http from "../http-common";

class CommentaireDataService {

  createCommentaire(data) {
    return http.post("/poste/commentaire", data);
  }
  getAllCommentaires() {
    return http.get("/poste/commentaire/:id");
  }
  modifyCommentaire(){
    return http.put("/postes/commentaire/:id");
  }
  deleteCommentaire() {
    return http.delete("/postes/:id/commentaire/:id");
  }

}
export default new CommentaireDataService();