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
  modifyCommentaire(id, data) {
    return http.put("/poste/commentaire/" + id, data);
  }
  deleteCommentaire(id, token) {
    return http.delete("/poste/commentaire/" + id, { headers: { token: token } });
  }

}
export default new CommentaireDataService();