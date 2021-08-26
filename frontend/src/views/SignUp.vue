<template>
  <div>
    <SignUp/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import SignUp from '@/components/SignUpForm.vue'

export default {
  components: {
    SignUp, 
    Footer
  }
}
</script>