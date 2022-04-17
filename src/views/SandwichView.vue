<template>

<h1>Nos Sandwichs</h1>
  <div class="containerCard">
    <compCard v-for="itemSand,idx of this.$store.getters.getSandwichs" 
    :key="idx" 
    :titre="itemSand.title" 
    :prix="itemSand.prix" 
    :url="require('@/assets/img/'+itemSand.url)" />
  </div>
</template>

<script>
// @ is an alias to /src
import compCard from '@/components/compCard.vue'

export default {
  name: "SandwichView",
  components:{
    compCard
  },
}
</script>

<style scoped>
</style>