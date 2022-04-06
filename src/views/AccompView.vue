<template>
  <h1>This is Accomp page</h1>
   <compAccomp />
</template>

<script>
import compAccomp from '@/components/compAccomp.vue'

export default {
  name:"AccompView",
  components: {
    compAccomp
  },
  computed:{
    foncAccomp(){
      return this.$store.getters.getAccomp;
    }
  }
}
</script>
