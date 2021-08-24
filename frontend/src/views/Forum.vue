<template>
  <div class="forum">
    <AddPoste/>
    <h1>Fil d'actualité</h1>
    <DisplayPostes/>
  </div>
</template>


<script>
import AddPoste from '@/components/AddPoste.vue'
import DisplayPostes from '@/components/DisplayPostes.vue'

  export default {
    components: {
      AddPoste,
      DisplayPostes
    }
  }
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
  .forum {
    font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
  }
  h1 {
    text-align: center;
  }
</style>