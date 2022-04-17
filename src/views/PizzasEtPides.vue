<template>
<div class="viewContainer">
<h1>Nos Pizzas et Pides</h1>
  <div class="containerCard">
    <compCard v-for="itemPizza,idx in this.$store.getters.getPizza" 
    :key="idx"  
    :titre="itemPizza.title" 
    :prix="itemPizza.prix" 
    :url="require('@/assets/img/'+itemPizza.url)"/> 
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
