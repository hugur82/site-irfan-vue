<template>
  <h1>This is Assiettes page</h1>
    <compAssiette />
</template>

<script>
import compAssiette from '@/components/compAssiette.vue'

export default {
  name:"AssietteView",
  components:{
    compAssiette
  }
  
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>
