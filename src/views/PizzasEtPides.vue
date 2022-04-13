<template>
<h1>Nos Pizzas et Pides</h1>
  <div class="container">
      <compCard v-for="itemPizza,idx in foncPizza" :key="idx"  :titre="itemPizza.title" :prix="itemPizza.prix" :url="require('@/assets/img/'+itemPizza.url)"/> 
    
  </div>
</template>

<script>
 import compCard from '@/components/compCard.vue'

export default {
  name:"PizzasEtPides",
   components:{
     compCard
   },
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
