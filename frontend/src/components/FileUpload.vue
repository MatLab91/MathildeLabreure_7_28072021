<template>
<div class="file">
    <form enctype="multipart/form-data">
        <div class="fields">
            <label>Upload files</label><br/>
            <input
                type="file"
            />
        </div>
        <div class="fields">
            <button>Submit</button>
        </div>
    </form>
    <button class="button-trombone"><i class="fas fa-paperclip"></i></button>
</div>
</template>
<script>
// import PosteDataService from "../services/PosteDataService";

export default {
  name: 'FileUpload'
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