<template>
  <div id="app">
  <div class="header main-wrapper header--wrapper">
    <div>
      <router-link to="/forum" class="header--lien" aria-label="Retour vers la page d'accueil">
        <img  class="header--logo" src="./assets/icon-left-font-monochrome-white.svg" alt="Logo de Groupomania">
      </router-link>
    </div>

    <nav class="header--nav">
      <router-link to="/forum" class="header--nav--profile header--lien" title="Retour vers la page d'accueil">
        <i class="fas fa-globe"></i>
      </router-link>
      
      <!-- <router-link to="/" aria-label="Notifications" title="Mes notifications" class="header--nav--notifs header--lien">
        <i class="fas fa-bell"></i>
      </router-link> -->
      <router-link to="/profil" class="header--nav--profile header--lien" title="Mon profil">
        <i class="fas fa-user"></i>
      </router-link>
      <router-link to="/login" class="header--lien" aria-label="Se déconnecter" title="Se déconnecter">
        <i class="fas fa-power-off"></i>
      </router-link>
    </nav>
    
  </div>
  <router-view/>
  </div>
  
</template>

<script>

</script>


<style lang="scss">
@import "../variables.scss";
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  z-index: 2;
  max-width: 2500px;
  margin: 0 auto;
}
.header {
  padding: 1.5rem 0 1rem 0;
  margin-bottom: 1rem;
  border-bottom: 5px solid $color-secondary;
  background: $color-like-neutral;
  color: $color-primary;
  font-size: 1.2rem;
  
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: -1rem;
  &--wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 650px){
      justify-content: space-between;
    }
  }

  &--logo {
    width: 300px;
    margin-left: 5%;
  }

  &--nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    

    .header--lien {
      margin: 0 1rem;
      transition: 300ms;
      color: white;
      &:hover {
        transform: scale(1.2);
        color: $color-secondary;
      }
    }
    &--notifs {
      position: relative;
      &--number {
        position: absolute;
        top: -1em;
        right: -1em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5em;
        height: 1.5em;
        font-size: 0.8rem;
        background-color: $color-secondary-lighter;
        color: $color-secondary;
        border: 1px solid $color-secondary;
        border-radius: 50%;
      }
    }

    .fas {
      font-size: 1.2em;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid white;
    }

  }
}
</style>
