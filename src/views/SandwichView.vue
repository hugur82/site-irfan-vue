<template>
<div class="viewContainer">
<h1>Nos Sandwichs</h1>
  <div class="containerCard">
    <compCard v-for="itemSand,idx of this.$store.getters.getSandwichs" 
    :key="idx" 
    :tabProduct="itemSand" />
  </div>
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