<template>
<div class="file">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <div class="fields">
            <label>Upload files</label><br/>
            <input
                type="file"
                ref="file"
                @change="onSelect"
            />
        </div>
        <div class="fields">
            <button>Submit</button>
        </div>
        <div class="message">
            {{ message }}
        </div>
    </form>
    <button class="button-trombone"><i class="fas fa-paperclip"></i></button>
</div>
</template>
<script>
// import PosteDataService from "../services/PosteDataService";
import axios from 'axios';

export default {
  name: 'FileUpload',
  data() {
      return {
          file:'',
          message:''
      }
  },
  methods: {
      onSelect() {
          const file = this.$refs.file.files[0];
          this.file = file;
      },
      async onSubmit() {
          const formData = new FormData();
          formData.append('file', this.file);
          try {
              await axios.post('/upload', formData);
              this.message = 'Uploaded !'
          }
          catch(err){
              console.log(err);
              this.message = 'Something went wrong ! '
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

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
.button-trombone {
  width:10%;
}
</style>