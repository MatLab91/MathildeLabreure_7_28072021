<template>
  <div class="home">
    <Forum msg="Bonjour à toutes et à tous !"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Forum from '@/components/Forum.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Forum,
    Footer
  }
}
</script>
