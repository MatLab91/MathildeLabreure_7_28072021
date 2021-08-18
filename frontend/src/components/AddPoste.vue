<template>
<div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="poste.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="poste.description"
          name="description"
        />
      </div>

      <button @click="savePoste" class="btn btn-success">Publier</button>
    </div>

     <div v-else>
      <h4>Votre poste a bien été publié!</h4>
      <button class="btn btn-success" @click="newPoste">Ajouter</button>
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
        description: ""
      },
      submitted: false
    };
  },
  methods: {
    savePoste() {
      var data = {
        title: this.poste.title,
        description: this.poste.description
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

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>