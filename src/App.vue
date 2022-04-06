<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/sandwich">Sandwichs</router-link> |
    <router-link to="/pizzaPide">Pizzas and Pides</router-link> |
    <router-link to="/assiette">Assièttes</router-link> |
    <router-link to="/accomp">Accompagnements</router-link> |
    <router-link to="/about">Contact</router-link>

  </nav>
  <router-view/>
</template>

<style lang="scss">
@import './assets/style.css' ;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: burlywood;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #c4cdd6;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
