<template>
<div class="card-container">
    <div class="card" v-if="!submitted">
      <div class="form-group">
        <input
          placeholder="Titre de la publication"
          type="text"
          class="form-control poste-titre"
          id="title"
          required
          v-model="poste.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <input
          placeholder="Description"
          class="form-control poste-description"
          id="description"
          required
          v-model="poste.content"
          name="description"
        />
      </div>

      <div id="button-container">
      <button @click="savePoste" class="button-publier">Publier</button>
      <button class="button-trombone"><i class="fas fa-paperclip"></i></button>
      </div>
    </div>

     <div v-else>
      <h4 id="poste-done-title">Votre poste a bien été publié !</h4>
      <button class="btn" @click="newPoste">Ajouter un nouveau poste</button>
    </div>
  </div>

</template>

<script>
import PosteDataService from "../services/PosteDataService";

export default {
  name: "add-poste",
  data() {
    return {
      poste: {
        id: null,
        title: "",
        content: ""
      },
      submitted: false
    };
  },
  methods: {
    savePoste() {
      var data = {
        title: this.poste.title,
        content: this.poste.content,
        token: sessionStorage.getItem("token")
      };

      PosteDataService.create(data)
        .then(response => {
          this.poste.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

     newPoste() {
      this.submitted = false;
      this.Poste = {};
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

.card {
  font-weight: 800;
  max-width: 800px;
  border-radius: 16px;
  padding:32px;
  margin: auto;
  font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
  &-container {
    box-shadow: $shadow;
    border-radius: 10px;
    max-width: 800px;
    width: 80vh;
    margin: auto;
  }
}
.form-control {
  width: 100%;
  font-weight: 400;
  background: $color-back-background;
  margin-bottom: 2%;
  border-radius: 10px;
}
.poste {
  &-titre {
    min-height: 5vh;
    width: 100%;
  }
  &-description {
    min-height: 15vh;
    width: 100%;
  }
}
button {
  background: $color-secondary;
  color:white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  padding: 16px;
  transition: .4s background-color;
  &:hover {
  cursor:pointer;
  background: $color-secondary-light;
  }
}
#button-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.button-publier {
  width: 90%;
  margin-right: 1%;
}
.button-trombone {
  width:10%;
}
.btn {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 2%;
}
#poste-done-title{
  text-align: center;
  padding-top: 5%
} 
</style>