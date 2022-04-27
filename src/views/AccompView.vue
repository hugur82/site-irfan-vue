<template>
<div class="viewContainer">
  <h1>This is Accomp page</h1>
  <div class="containerCard">
    <compCard v-for="itemAccomp, idx of this.$store.getters.getAccomp" 
    :key="idx" 
    :tabProduct="itemAccomp" />
  </div>
  </div>
</template>

<script>
import compCard from '@/components/compCard.vue'

export default {
  name:"AccompView",
  components: {
    compCard
  },
 }
</script>
