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
  getAll() {
    return http.get("/users");
  }

}

export default new UtilisateurDataService();