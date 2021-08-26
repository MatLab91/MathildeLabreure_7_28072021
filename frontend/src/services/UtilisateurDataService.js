import http from "../http-common";

class UtilisateurDataService {

  signup(data) {
    return http.post("/signup", data)
    .then(() => {
        window.location.href = '/forum';
        // expected output: "Success!"
      });
      
  }
  login() {
    return http.post("/login");
  } 
  getOneUtilisateur() {
    return http.get("/profil/:id");
  }
  delete(){
    return http.delete("profil/:id")
  }

}

export default new UtilisateurDataService();