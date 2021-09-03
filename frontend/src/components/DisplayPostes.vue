<template>
  <div>
    <article v-for="poste in postes" :key="poste.id">
      <header class="header">
        <div class="header--text">
          <p class="header--name">
            {{ poste.utilisateur.name }}
          </p>
          <p class="header--date">
            {{ getDate(poste.createdAt) }}
          </p>
        </div>
        <form class="header--supprimer--post">
          <button
            @click.prevent="deletePoste(poste.id)"
            aria-label="Supprimer la publication"
          >
            <i class="fas fa-trash"></i>
          </button>
        </form>
      </header>

      <!-- Main: Titre et contenu de la publication -->
      <main>
        <strong>
          {{ poste.title }}
        </strong>
        <div class="content">
          <p>{{ poste.content }}</p>
        </div>
        <div>
          <img :src="poste.imageURL" />
        </div>
      </main>

      <footer>
        <DisplayCommentaires :posteId="poste.id" />
        <Commentaire :posteId="poste.id" />
      </footer>
    </article>
  </div>
</template>

<script>
import Commentaire from "@/components/Commentaire.vue";
import DisplayCommentaires from "@/components/DisplayCommentaires.vue";
import PosteDataService from "../services/PosteDataService";
// import axios from "axios";

export default {
  name: "display-poste",
  components: {
    Commentaire,
    DisplayCommentaires,
  },
  data() {
    return {
      postes: [],
    };
  },
  methods: {
    retrievePostes() {
      PosteDataService.getAllPostes()
        .then((response) => {
          this.postes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDate(datetime) {
      let date = new Date(datetime).toJSON().slice(0, 10).replace(/-/g, "/");
      return date;
    },
    /*deletePoste() {
      let id = this.poste.id
      console.log(id)
      // let id = sessionStorage.getItem("id");
      let token = sessionStorage.getItem("token");
      axios.delete("http://localhost:8080/api/poste/" + id, {
        headers: { authorization: token },
      });
      // sessionStorage.removeItem("id");
      // this.$router.push("/accueil");
    },*/
    /*deletePoste() {
      PosteDataService.deletePoste(this.postes.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "postes" });
        })
        .catch(e => {
          console.log(e);
        });
    }*/
    deletePoste(id) {
      PosteDataService.deletePoste(`${id}`).then((response) => {
        console.log(response.data);
        alert("Le poste a correctement été supprimé");
        this.retrievePostes();
      });
    },
    modifyPoste(id) {
      PosteDataService.modifyPoste(`${id}`).then((response) => {
        console.log(response.data);
        alert("Le poste a été modifié correctement");
      });
    },
  },
  beforeMount() {
    PosteDataService.getAllPostes()
      .then((response) => {
        this.postes = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    this.retrievePostes();
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

article {
  font-family: "Poppins", sans-serif, Helvetica, Arial, sans-serif;
  overflow: hidden;
  margin: 2em auto;
  max-width: 800px;
  background: $color-cards-background;
  box-shadow: $shadow;
  border-radius: 10px;
}
.header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: $color-neutral-lighter;
  padding: 0.8rem 1.5rem 0 1.5rem;
  &--text {
    flex-grow: 2;
  }
  &--name {
    color: $color-primary;
    font-weight: bold;
  }
  &--date {
    font-style: italic;
    font-weight: 400;
  }
  &--supprimer--post {
    button {
      background: $color-secondary-lighter;
      margin: 1rem 1rem 1rem 1rem;
      padding: 9% 11%;
      border: 1px solid $color-secondary;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background: $color-secondary-light;
      }
    }
    .fas {
      color: $color-secondary;
      font-size: 1.2rem;
    }
  }
}
main {
  img {
    width: 100%;
    margin-top: -1rem;
  }
  .content {
    padding: 1em 2em;
    font-weight: bolder;
  }
}

.hidden {
  display: none;
}
</style>