<template>
  <div class="container">
    <compCard v-for="itemSand,idx of foncSand" :key="idx" :titre="itemSand.title" :prix="itemSand.prix" :url="require('@/assets/img/'+itemSand.url)" />
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
  computed: {
    foncSand(){
      return this.$store.getters.getSandwichs;
    }
  },
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>