<template>
  <div class="card-container">
    <div class="card" v-if="!submitted">
      <form @submit.prevent="savePoste" enctype="multipart/form-data">
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

        <div class="form-group">
          <div class="fields">
            <label>Upload files</label><br />
            <input type="file" ref="file" @change="onChangeFile" />
          </div>
        </div>

        <div id="button-container">
          <button class="button-publier">Publier</button>
          <button class="button-trombone">
            <i class="fas fa-paperclip"></i>
          </button>
        </div>
      </form>
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
  components: {
  },
  data() {
    return {
      poste: {
        id: null,
        title: "",
        content: "",
      },
      file: "",
      submitted: false,
    };
  },
  methods: {
    savePoste() {

    const formData = new FormData();
    formData.append('title', this.poste.title);
    formData.append('content', this.poste.content);
    formData.append('file', this.file);
    formData.append('token', sessionStorage.getItem("token"));

      PosteDataService.create(formData)
        .then((response) => {
          this.poste.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.$emit("refresh");
        })
        .catch((e) => {
          console.log(e);
        });
        
    },

    newPoste() {
      this.submitted = false;
      this.Poste = {};
      this.$forceUpdate();
    },

    onChangeFile() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

.card {
  font-weight: 800;
  max-width: 800px;
  border-radius: 16px;
  padding: 32px;
  margin: auto;
  font-family: "Poppins", sans-serif, Helvetica, Arial, sans-serif;
  &-container {
    box-shadow: $shadow;
    border-radius: 10px;
    max-width: 800px;
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
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  padding: 16px;
  transition: 0.4s background-color;
  &:hover {
    cursor: pointer;
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
/*.button-trombone {
  width:10%;
}*/
.btn {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 2%;
}
#poste-done-title {
  text-align: center;
  padding-top: 5%;
}
</style>