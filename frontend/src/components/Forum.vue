<template>
  <div class="forum">
    <h1>Fil d'actualité</h1>
    <article>
      <header class="header">
        <div>
          <a>
            <img src="../assets/jonsnow.png" alt="Photo de profil de JON SNOW">
          </a>
        </div>
        <div class="header--text">
          <p class="header--name">
            Jon Snow
          </p>
          <p class="header--date">
            Publié le 31/07/2021
          </p>
        </div>
        <form class="header--supprimer--post">
          <button aria-label="Supprimer la publication"><i class="fas fa-trash"></i></button>
        </form>
      </header>
      <!-- Main: Photo et/ou contenu -->
      <main>
        <div class="picture">
          <img src="../assets/iguazu.png" alt="Photo de la publication">
        </div>
        <div>
          <p>Super vacances aux chutes d'Iguazu, absolument magnifique !</p>
        </div>
      </main>
      <!-- Footer: likes et commentaires -->
      <footer>
        <div class="likes">
          <form>
            <button aria-label="liker la publication">
              <i class="fas fa-thumbs-up"></i>
            </button>
          </form>
          <form>
            <button aria-label="disliker la publication">
              <i class="fas fa-thumbs-down"></i>
            </button>
          </form>
        </div>
        <div class="commentaires">
          <h3>Commentaires</h3>
          <div class="commentaires--unique">

            <div class="commentaires--image">
              <img src="../assets/tyrion.png" alt="Photo de profil de TYRION LANNISTER">
            </div>

            <div class="commentaires--poste">
              <p class="commentaires--poste--titre">
                <span>Tyrion Lannister</span> le 01/08/2021 à 12:10
              </p>
              <p class="commentaires--poste--texte"> 
                C'est vraiment super jolie! Bonnes vacances à toi et Ygrid !
              </p>
            </div>

            <div class="commentaires--delete">
              <i class="fas fa-trash"></i>
            </div>
          </div>
          <form class="commentaires--ajouter">
            <img src="../assets/jonsnow.png" alt="Votre photo de profil">
            <label for="ajout-commentaire" class="hidden">Votre commentaire</label>
            <input id="ajout-commentaire" type="text" placeholder="Votre commentaire">
            <input type="hidden" name="postId">
            <button type="submit" aria-label="Commenter">Commenter</button>
          </form>
        </div>
      </footer>
    </article>
    <article class="com-margaret">
      <header class="header">
        <div>
          <a>
            <img src="../assets/margaret.png" alt="Photo de profil de ARYA STARK">
          </a>
        </div>
        <div class="header--text">
          <p class="header--name">
            Margaret Tyrell
          </p>
          <p class="header--date">
            Publié le 10/07/2021 à 16:23
          </p>
        </div>
        <form class="header--supprimer--post">
          <button aria-label="Supprimer la publication"><i class="fas fa-trash"></i></button>
        </form>
      </header>
      <!-- Main: Photo et/ou contenu -->
      <main>
        <div class="picture">
          <img src="../assets/chalten.png" alt="Photo de la publication">
        </div>
        <div>
          <p>Voici le mont Fitz Roy que nous avons pu découvrir après un trek très éprouvant avec Loras en Patagonie argentine, mais quel cadeau à l'arrivée !</p>
        </div>
      </main>
      <!-- Footer: likes et commentaires -->
      <footer>
        <div class="likes">
          <form>
            <button aria-label="liker la publication">
              <i class="fas fa-thumbs-up"></i>
            </button>
          </form>
          <form>
            <button aria-label="disliker la publication">
              <i class="fas fa-thumbs-down"></i>
            </button>
          </form>
        </div>
        <div class="commentaires">
          <h3>Commentaires</h3>
          <div class="commentaires--unique">

            <div class="commentaires--image">
              <img src="../assets/arya.png" alt="Photo de profil de ARYA STARK">
            </div>

            <div class="commentaires--poste">
              <p class="commentaires--poste--titre">
                <span>Arya Stark</span> le 17/07/2021 à 21:34
              </p>
              <p class="commentaires--poste--texte"> 
                Wahou, j'aimerais tellement aller en Patagonie !
              </p>
            </div>

            <div class="commentaires--delete">
              <i class="fas fa-trash"></i>
            </div>
          </div>
          <div class="commentaires--unique">

            <div class="commentaires--image">
              <img src="../assets/ned.png" alt="Photo de profil de NED STARK">
            </div>

            <div class="commentaires--poste">
              <p class="commentaires--poste--titre">
                <span>Ned Stark</span> le 17/07/2021 à 21:34
              </p>
              <p class="commentaires--poste--texte"> 
                Ca ne te changera pas de notre climat à Winterfell, Arya ! 😂
              </p>
            </div>

            <div class="commentaires--delete">
              <i class="fas fa-trash"></i>
            </div>
          </div>
          <form class="commentaires--ajouter">
            <img src="../assets/jonsnow.png" alt="Votre photo de profil">
            <label for="ajout-commentaire" class="hidden">Votre commentaire</label>
            <input id="ajout-commentaire" type="text" placeholder="Votre commentaire">
            <input type="hidden" name="postId">
            <button type="submit" aria-label="Commenter">Commenter</button>
          </form>
        </div>
      </footer>
    </article>
  </div>
</template>


<script>
export default {
  name: "Forum",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../variables.scss";

  article {
    overflow: hidden;
    margin: 2em auto;
    max-width: 800px;
    background: $color-cards-background;
    box-shadow: $shadow;
    border-radius: 10px;
  }
  header img {
    width: 5rem;
    margin: 1rem 3rem 1rem 1rem;
    border-radius: 50%;
  }
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: $color-neutral-lighter;
    padding: 0.8rem 1.5rem 0 1.5rem;
    &--text {
      flex-grow: 2;
    }
    &--name {
      color: $color-primary;
      font-weight: bold; 
    }
    &--date {
      font-style: italic;
      font-weight: 400;
    }
    &--supprimer--post {
      button {
        background: $color-secondary-lighter;
        margin: 1rem 3rem 1rem 1rem;
        padding: 9% 11%;
        border: 1px solid $color-secondary;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
          background: $color-secondary-light;
        }
      }
      .fas {
        color: $color-secondary;
        font-size: 1.2rem;
      }
    }
  }
  main {
    img {
      width: 100%;
      margin-top: -1rem;
    }
    .content {
      padding: 1em 2em;
      font-weight: bolder;
    }
  }
  footer {
    .likes {
      display: flex;
      form {
        width: 50%;
        &:first-child {
          border-right: 1px solid $color-primary;
        }
      }
      button {
        padding: 0.5em;
        width: 100%;
        background: $color-primary-lighter;
        border: none;
        border-top: 1px solid $color-primary;
        border-bottom: 1px solid $color-primary;
        color: $color-like-neutral;
        cursor: pointer;
        &:hover {
          background: $color-primary-light;
          transform: scale(1.1);
        }
        
        .fas {
          font-size: 1.2em;
        }
      }
      .alreadyLiked {
        color: $color-like-like;
      }
      .alreadyDisliked {
        color: $color-like-dislike;
      }
    }
  }
  .commentaires {
    clear: both;
    &--unique {
      border-top: solid 2px $color-primary;
      border-bottom: solid 2px $color-primary;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      flex-grow: 2;
    }
  }
  .commentaires {
    &--image {
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
        margin-right: 1em;
      }
    }
    &--poste {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 1em;
      margin-bottom: 1em;
      &--titre {
        font-style: italic;
        margin: 0;
        span {
          color: $color-secondary;
        }
      }
      &--texte {
        margin: 0;
      }
    }
    &--delete {
      margin: 0.5em;
      padding: 0.5em 0.7em;
      border: 1px solid $color-secondary;
      border-radius: 10px;
      background: $color-secondary-lighter;
      cursor: pointer;
      height: 20%;
      &:hover {
        background: $color-secondary-light;
      }
      .fas {
        font-size: 1.2em;
        color: $color-secondary;
      }
    }
  }
  .commentaires {
    &--ajouter {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      img {
        flex-shrink: 0;
        width: 3rem;
        border-radius: 50%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
      }
      input {
        flex-grow: 2;
        min-width: 0;
        padding: 0 1em;
        border: 1px solid $color-primary;
        height: 3rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      button {
        background: $color-primary-lighter;
        border: 1px solid $color-primary;
        border-left: none;
        height: 3.13rem;
        font-size: 1em;
        color: $color-ajouter-commentaire;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        margin-right: 0.5rem;
        &:hover {
          background: $color-primary-light;
        }
      }
    }
  }
  .hidden {
  display: none;
  }

</style>