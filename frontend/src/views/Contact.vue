<template>
  <div class="contact">
    <img alt="Logo Groupomania" src="../assets/icon-left-font-monochrome-black.png">
    <h1>Réseau social interne de chez Groupomania</h1>
    <p>Si vous rencontrez des difficultés sur notre réseau social, 
        veuillez vous adresser au comité de pilotage sur le bien-être au travail.
        <br>bienetre@groupomania.fr
        <br>01 69 15 15 82</p>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'

  export default {
  components: {
    Footer
  },
}
</script>

<style scoped>
.contact {
  font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
}
p {
  font-size: 1rem;
  font-weight: 400;
}
img {
  max-width: 50%;
  max-height: 20rem;
}
</style>