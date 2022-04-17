<template>
  <h1>This is Accomp page</h1>
  <div class="containerCard">
    <compCard v-for="itemAccomp, idx of this.$store.getters.getAccomp" 
    :key="idx" 
    :titre="itemAccomp.title" 
    :prix="itemAccomp.prix" 
    :url="require('@/assets/img/'+itemAccomp.url)" />
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
