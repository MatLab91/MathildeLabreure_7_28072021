<template>
    <div id="footer">
        <ul id="footer-liste">
            <li><router-link class="footer--lien" to="/about"><i class="fas fa-info-circle"></i> About</router-link></li>
            <li><router-link class="footer--lien" to="/contact"><i class="far fa-envelope"></i> Contact</router-link></li>
        </ul>
        <router-view/>
    </div>

    
</template>

<script>

export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../../variables.scss";
#footer {
  background-color: $color-like-neutral;
  color: white;
  padding-top: 0.8rem;
  padding-left: 1.6rem;
  padding-bottom: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-top: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
ul {
  list-style-type: none;
  padding-left: 0px;
  text-decoration: none;
}
.footer--lien {
    color: white;
    font-weight: bolder;
    line-height: 1.5rem;
    text-decoration: none;
    padding-left: 0px;
    :link {
        text-decoration: none;
    }
    &:hover {
    font-weight:800;
    color: $color-secondary;
    }
}
</style>