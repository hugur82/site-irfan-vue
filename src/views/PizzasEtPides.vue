<template>
<div class="viewContainer">
<h1>Nos Pizzas et Pides</h1>
  <div class="containerCard">
    <compCard v-for="itemPizza,idx in this.$store.getters.getPizza" 
    :key="idx"  
    :tabProduct="itemPizza" /> 
  </div>
  </div>
</template>

<script>
 import compCard from '@/components/compCard.vue'

export default {
  name:"PizzasEtPides",
   components:{
     compCard
   },  
}
</script>

<style scoped>

</style>
