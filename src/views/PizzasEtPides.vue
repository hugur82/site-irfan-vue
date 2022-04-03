<template>
<h1>This is Pizza page</h1>
  <ul>
    <div class="about" v-for="pizza,idx in foncPizza" v-bind:key="idx">
      <li>{{pizza.title}} prix: {{pizza.prix}} €</li>
    </div>
  </ul>

</template>

<script>


export default {
  name:'PizzasEtPides',
  computed:{
    foncPizza(){
      return this.$store.getters.getPizza;
    }
  }

  
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>
