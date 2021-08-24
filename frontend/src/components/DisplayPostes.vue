<template>
    <div>
     <article v-for="poste in postes" :key="poste.id">

      <header class="header">
        <div class="header--text">
          <p class="header--name">
            NOM PERSONNE AYANT PUBLIÉ
          </p>
          <p class="header--date">
            {{ poste.createdAt }}
          </p>
        </div>
      </header>

      <!-- Main: Titre et contenu de la publication -->
      <main>
        <strong>
            {{ poste.title }}
        </strong>
        <div>
          <p> {{ poste.content }}</p>
        </div>
      </main>

      <!-- Footer: Commentaires -->
      <footer>
        <div class="commentaires">
          <h3>Commentaires</h3>
          <div class="commentaires--unique">
            <div class="commentaires--poste">
              <p class="commentaires--poste--titre">
                <span>NOM PERSONNE AYANT COMMENTÉ</span> DATE ET HEURE DU COMMENTAIRE
              </p>
              <p class="commentaires--poste--texte"> 
                CONTENU COMMENTAIRE
              </p>
            </div>
          </div>

          <form class="commentaires--ajouter">
            <label for="ajout-commentaire" class="hidden">Votre commentaire</label>
            <input id="ajout-commentaire" type="text" placeholder="Votre commentaire">
            <input type="hidden" name="postId">
            <button type="submit" aria-label="Commenter">Commenter</button>
          </form>
        </div>
      </footer>

    </article>
</div>
</template>

<script>
import PosteDataService from "../services/PosteDataService";

export default {
  name: "display-poste",
  data() {
    return {
      postes: {
        id: null,
        title: "",
        content: "",
      },
    };
  },
  methods: {
    retrievePostes() {
      PosteDataService.getAll()
        .then((response) => {
          this.postes = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
  },
  beforeMount() {
      PosteDataService.getAll()
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
    font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
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
  }
  main {
    .content {
      padding: 1em 2em;
      font-weight: bolder;
    }
  }

  .commentaires {
    clear: both;
    &--unique {
      border-top: solid 2px $color-primary;
      border-bottom: solid 2px $color-primary;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      flex-grow: 2;
    }
  }
  .commentaires {
    &--poste {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
      &--titre {
        font-style: italic;
        margin: 0;
        span {
          color: $color-secondary;
        }
      }
      &--texte {
        margin: 0;
      }
    }
  }
  .commentaires {
    &--ajouter {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      input {
        flex-grow: 2;
        min-width: 0;
        padding: 0 1em;
        border: 1px solid $color-primary;
        height: 3rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      button {
        background: $color-primary-lighter;
        border: 1px solid $color-primary;
        border-left: none;
        height: 3.13rem;
        font-size: 1em;
        color: $color-ajouter-commentaire;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        margin-right: 0.5rem;
        &:hover {
          background: $color-primary-light;
        }
      }
    }
  }
  .hidden {
  display: none;
  }

</style>