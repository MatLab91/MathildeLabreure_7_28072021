<template>
  <div class="about">
    <img alt="Logo Groupomania" src="../assets/icon-left-font-monochrome-black.png">
    <h1>Groupomania, leader de la grande distribution</h1>
    <p>Notre entreprise, spécialisée dans la grande distribution, est en pleine expansion. 
      <br>Nous avons actuellement plus de 600 collaborateurs. 
      <br>Nous avons crée ici un réseau social interne moderne et ludique afin que vous fassiez connaissance dans un cadre plus informel.</p>
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
.about {
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
