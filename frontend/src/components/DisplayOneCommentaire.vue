<template>
  <div class="commentaires--unique">
    <div class="commentaires--poste">
      <p class="commentaires--poste--titre">
        <span>{{ commentaire.utilisateur.name }}</span>
        {{ getDate(commentaire.createdAt) }}
      </p>
      <div v-if="!toggleEdit">
        <p class="commentaires--poste--texte">
          {{ commentaire.content }}
        </p>
      </div>
      <div v-else>
        <form @submit.prevent="editPost">
          <div class="form-group">
            <input
              placeholder="Commentaire"
              type="text"
              class="form-control"
              id="title"
              required
              v-model="content"
              name="title"
            />
          </div>
          <button>Edition</button>
        </form>
      </div>
    </div>
    <div class="icones">
      <div
        @click="deleteCommentaire(commentaire.id)"
        class="commentaires--delete"
      >
        <i class="fas fa-trash"></i>
      </div>
      <div @click="onToggleEdit()" class="commentaires--delete">
        <i class="fas fa-pen"></i>
      </div>
    </div>
  </div>
</template>


<script>
import CommentaireDataService from "../services/CommentaireDataService";

export default {
  name: "display-one-commentaire",
  props: ["commentaire"],
  data() {
    return {
      content: "",
      toggleEdit: false,
    };
  },
  methods: {
    onToggleEdit() {
      this.toggleEdit = !this.toggleEdit;
      this.content = this.commentaire.content;
    },
    deleteCommentaire(id) {
      CommentaireDataService.deleteCommentaire(`${id}`).then((response) => {
        console.log(response.data);
        alert("Le commentaire a été supprimé correctement.");
        this.$emit("refresh");
      });
    },
    editPost() {
      CommentaireDataService.modifyCommentaire(`${this.commentaire.id}`, {
        content: this.content,
      }).then((response) => {
        console.log(response.data);
        alert("Le commentaire a été modifié correctement.");
        this.$emit("refresh");
      });
    },
    getDate(datetime) {
      let date = new Date(datetime).toJSON().slice(0, 10).replace(/-/g, "/");
      return date;
    },
  },
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
.icones {
  display: flex;
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
  &--delete {
    margin: 0.5em;
    padding: 0.5em 0.7em;
    border: 1px solid $color-secondary;
    border-radius: 10px;
    background: $color-secondary-lighter;
    cursor: pointer;
    height: 20%;
    &:hover {
      background: $color-secondary-light;
    }
    .fas {
      font-size: 1.2em;
      color: $color-secondary;
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