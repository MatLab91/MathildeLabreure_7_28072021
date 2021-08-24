<template>
  <div>
    <!-- <div id="card-container">
      <div class="card">
        <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card__title" v-else>Inscription</h1>
        <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
        <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
        <div class="form-row">
        <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail"/>
      </div>
      <div class="form-row" v-if="mode == 'create'">
          <input v-model="prenom" class="form-row__input" type="text" placeholder="Prénom"/>
          <input v-model="nom" class="form-row__input" type="text" placeholder="Nom"/>
        </div>
      <div class="form-row">
        <input v-model="password" class="form-row__input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="form-row" v-if="mode == 'create'">
        <input v-model="confirm_password" class="form-row__input" type="password" placeholder="Confirmer le mot de passe"/>
      </div>
      <div class="form-row">
        <button class="button" :class= "{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
          <span>Connexion</span>
        </button>
        <button  @click='handleSubmit()' class="button" :class= "{'button--disabled' : !validatedFields}" v-else>
          <span>Créer mon compte</span>
        </button>
      </div>
      </div>
    </div> -->


    <div id="card-container">
      <div class="card">
        <!-- <h1 class="card__title" v-if="mode == 'login'">Connexion</h1> -->
        <h1 class="card__title">Inscription</h1>
        <!-- <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
        <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p> -->
        <div class="form-row">
        <input v-model="utilisateur.email" class="form-row__input" type="text" placeholder="Adresse mail"/>
      </div>
      <div class="form-row">
          <input v-model="utilisateur.name" class="form-row__input" type="text" placeholder="Prénom et Nom"/>
      </div>
      <div class="form-row">
        <input v-model="utilisateur.password" class="form-row__input" type="password" placeholder="Mot de passe"/>
      </div>
      <div class="form-row">
        <!-- <button class="button" :class= "{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
          <span>Connexion</span>
        </button> -->
        <button  @click='createAccount()' class="button">
          <span>Créer mon compte</span>
        </button>
      </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import UtilisateurDataService from "../services/UtilisateurDataService";
  /*import axios from 'axios'*/

/*  export default {
  components: {
    Footer
  },
  name: 'Login',
  data() {
    return {
      mode: 'login',
      email: '',
      prenom: '',
      nom: '',
      password: '',
      confirm_password: ''
    }
  },
  computed: {
    validatedFields: function() {
     if (this.mode == 'create') {
       if (this.email != '' && this.prenom != '' && this.nom != '' && this.password != '') {
         return true;
       } else {
         return false;
       }
     } else {
       if (this.email != '' && this.password !='') {
         return true;
       } else {
         return false;
       }
     }
    }
  },
  methods: {
    switchToCreateAccount: function() {
      this.mode = 'create';
    },
    switchToLogin: function() {
      this.mode = 'login';
    },
    /*createAccount: function() {
      this.$store.dispatch('createAccount', {
        email: this.email,
        prenom: this.prenom,
        nom: this.nom,
        password: this.paswword
      })
    }*/
    /*handleSubmit() {
      const data = {
        first_name : this.prenom,
        last_name : this.nom,
        email : this.email,
        password : this.password,
        confirm_password :  this.confirm_password
      }*/
      /*axios.post('http://localhost:8080/login', data)
        .then(
          res => {
            console.log(res)
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
    }
  } */

export default {
  components: {
    Footer
  },
  name: 'save-user',
  data() {
    return {
      utilisateur: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    createAccount() {
      var data = {
        email: this.utilisateur.email,
        name: this.utilisateur.name,
        password: this.utilisateur.password
      };

      UtilisateurDataService.signup(data)
        .then(response => {
          this.utilisateur.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
#card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  font-family: 'Poppins', sans-serif, Helvetica, Arial, sans-serif;
}
.form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  &__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  &__input::placeholder {
    color:#aaaaaa;
  }
}
.card {
  max-width: 100%;
  width: 540px;
  background:white;
  border-radius: 16px;
  padding:32px;
  &__title {
  text-align:center;
  font-weight: 800;
  }
  &__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
  }
  &__action {
    color:$color-primary-light;
    text-decoration: underline;
  }
  &__action:hover {
    cursor:pointer;
  }
}
.button {
    background: $color-secondary;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
    &:hover {
    cursor:pointer;
    background: $color-secondary-light;
    }
    &--disabled {
    background:#cecece;
    color:#ececec
    }
    &--disabled:hover {
    cursor:not-allowed;
    background:#cecece;
    }
}

</style>
