<template>
  <div id="card-container">
    <div class="card">
      <h1 class="card__title">Connexion</h1>
      <p class="card__subtitle">
        Tu n'as pas encore de compte ?
        <span class="card__action" @click="switchToCreateAccount()"
          >Créer un compte</span
        >
      </p>

      <div class="form-row">
        <input
          v-model="utilisateur.email"
          class="form-row__input"
          type="text"
          placeholder="Adresse mail"
        />
      </div>
      <div class="form-row">
        <input
          v-model="utilisateur.password"
          class="form-row__input"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <div class="form-row">
        <button
          @click="connectAccount()"
          class="button"
          :class="{ 'button--disabled': !validatedFields }"
        >
          <span>Connexion</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      utilisateur: {
        email: "",
        password: "",
        URL: "http://localhost:8080/api/login",
      },
    };
  },
  computed: {
    validatedFields: function () {
      if (this.email != "" && this.password != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    switchToCreateAccount() {
      this.$router.push("/signup");
    },
    connectAccount() {
      let email = this.email;
      let password = this.password;
      axios
        .post("http://localhost:8080/api/login", {
          email: email,
          password,
        })
        .then((res) => {
          sessionStorage.setItem("token", res.data.token);
          this.$router.push("/forum");
        })
        .catch(() => {
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
#card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  font-family: "Poppins", sans-serif, Helvetica, Arial, sans-serif;
}
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
  &__input {
    padding: 8px;
    border: none;
    border-radius: 8px;
    background: #f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex: 1;
    min-width: 100px;
    color: black;
  }
  &__input::placeholder {
    color: #aaaaaa;
  }
}
.card {
  max-width: 100%;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
  &__title {
    text-align: center;
    font-weight: 800;
  }
  &__subtitle {
    text-align: center;
    color: #666;
    font-weight: 500;
  }
  &__action {
    color: $color-primary-light;
    text-decoration: underline;
  }
  &__action:hover {
    cursor: pointer;
  }
}
.button {
  background: $color-secondary;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
  &:hover {
    cursor: pointer;
    background: $color-secondary-light;
  }
  &--disabled {
    background: #cecece;
    color: #ececec;
  }
  &--disabled:hover {
    cursor: not-allowed;
    background: #cecece;
  }
}
</style>