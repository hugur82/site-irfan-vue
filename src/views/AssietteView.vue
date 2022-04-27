<template>
<div class="viewContainer">
  <h1>This is Assiettes page</h1>
  <div class="containerCard">
    <compCard v-for="itemAssiette,idx of this.$store.getters.getAssiette" 
    :key="idx" 
    :tabProduct="itemAssiette" />
  </div>
  </div>
</template>

<script>
import compCard from '@/components/compCard.vue'

export default {
  name:"AssietteView",
  components:{
    compCard
  }, 
}
</script>

<style scoped>

</style>
