<template>
<h1>This is the sandwich list</h1>
  <ul>
    <div class="about" v-for="indexSand, idx in foncSand" v-bind:key="idx">
    <li> {{indexSand.title}} : {{indexSand.prix}} € </li>
    
  </div>
  </ul>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'SandwichView',
  computed: {
    foncSand(){
      //Direct acces
      //return this.$store.state.tabSandwich;

      //getters
      return this.$store.getters.getSandwichs;
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>