<template>
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
            <button @click="publierCommentaire()" type="submit" aria-label="Commenter">Commenter</button>
          </form>
        </div>
</template>

<script>
import CommentaireDataService from "../services/CommentaireDataService";

export default {
  name: "add-commentaire",
  data() {
    return {
      commentaire: {
        id: null,
        content: ""
      },
      submitted: false
    };
  },
  methods: {
    publierCommentaire() {
      var data = {
        content: this.poste.content
      };

      CommentaireDataService.createCommentaire(data)
        .then(response => {
          this.commentaire.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

     newCommentaire() {
      this.submitted = false;
      this.Commentaire = {};
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../variables.scss";

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