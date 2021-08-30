<template>
  <div>
  <div class="contact">
    <h1 id="profil-title">Mon profil</h1>
    <div class="profil-container">
        <div class="profil-container--enfant">
          <div class="infos"><span class="categorie">Prénom et Nom </span> {{ utilisateur.name }}</div>
          <div class="infos"><span class="categorie">Email </span>{{ utilisateur.email }}</div>
          <button @click="deleteUser(utilisateur.id)" class="button">
            <span><i class="fas fa-trash"></i> Supprimer mon compte</span>
          </button>
        </div>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import UtilisateurDataService from "../services/UtilisateurDataService";

export default {
  components: {
    Footer
  },
  name: "display-user",
  data() {
    return {
      utilisateur: {
        id: null,
        email: "",
        name: "",
      },
    };
  },
  methods: {
    deleteUser(id) {
      UtilisateurDataService.delete(`${id}`)
        .then((response) => {
          this.utilisateur = response.data;
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    displayUsers() {
      UtilisateurDataService.getOneUtilisateur(sessionStorage.getItem("token"))
        .then((response) => {
          this.utilisateur = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  beforeMount() {
    UtilisateurDataService.getOneUtilisateur(sessionStorage.getItem("token"))
        .then((response) => {
          this.utilisateur = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      this.displayUsers();
    },
};
</script>


<style scoped lang="scss">
@import "../../variables.scss";

p {
  font-size: 1rem;
  font-weight: 400;
}
.contact {
  background-color: white;
  min-height: 70vh;
  font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
  margin-top: 2rem;
}
#profil-title {
  padding-left: 2rem;
}
.profil-container {
  display: flex;
  justify-content: space-around;
  padding: 0 5rem 0 5rem;
  max-width: 80rem;
  &--enfant {
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .infos {
      text-align:left;
    }
    .categorie {
      font-weight: bold;
    }
    @media screen and (min-width: 1250px){
    margin-left: 2em;
    }
  }
  @media screen and (max-width: 750px){
    flex-direction: column;
  }
  @media screen and (min-width: 1250px){
    justify-content: center;
    margin-left: 25vw;
    margin-right: 25vw;
  }
}
.button {
  background: $color-secondary;
  color:white;
  margin-top: 1rem;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  min-width: 150px;
  padding: 1rem;
  transition: .4s background-color;
  &:hover {
  cursor:pointer;
  background: $color-secondary-light;
  }
}
</style>