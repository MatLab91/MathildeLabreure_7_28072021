<template>
  <div class="contact">
    <img id="logo" alt="Logo Groupomania" src="../assets/icon-left-font-monochrome-black.png">
    <h1>Mon profil</h1>
    <div class="profil-container">
        <img id="photo-profil" alt="photo de profil" src="../assets/photofemme.jpeg">
        <div class="profil-container--enfant">
          <div class="infos"><span class="categorie">Prénom </span>Amélie</div>
          <div class="infos"><span class="categorie">Nom </span>Cordier</div>
          <div class="infos"><span class="categorie">Email </span>amelie.cordier@groupomania.fr</div>
          <div class="infos"><span class="categorie">Téléphone </span>06 13 78 93 22</div>
          <div class="infos"><span class="categorie">Citation </span>"Sois le changement que tu veux voir dans le monde" - Gandhi</div>
          <button class="button">
            <span><i class="far fa-edit"></i> Modifier</span>
          </button>
        </div>
    </div>
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


<style lang="scss" scoped>
@import "../../variables.scss";
#logo {
  max-width: 30%;
  max-height: 20rem;
}
p {
  font-size: 1rem;
  font-weight: 400;
}
img {
  width: 20rem;
  max-height: 20rem;
  border-radius: 50%;
}
.profil-container {
  display: flex;
  justify-content: space-around;
  padding: 0 5rem 0 5rem;
  max-width: 80rem;
  &--enfant {
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .infos {
      text-align:left;
    }
    .categorie {
      font-weight: bold;
    }
    @media screen and (min-width: 1250px){
    margin-left: 2em;
    }
  }
  @media screen and (max-width: 750px){
    flex-direction: column;
  }
  @media screen and (min-width: 1250px){
    justify-content: center;
    margin-left: 25vw;
    margin-right: 25vw;
  }
}
#photo-profil {
    width: 200px;
    height: 200px; 
}
.button {
  background: $color-secondary;
  color:white;
  margin-top: 1rem;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 30%;
  min-width: 150px;
  padding: 1rem;
  transition: .4s background-color;
  &:hover {
  cursor:pointer;
  background: $color-secondary-light;
  }
}
</style>