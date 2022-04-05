<template>
<compSand />
</template>

<script>
// @ is an alias to /src
import compSand from '@/components/compSand.vue'

export default {
  name: "SandwichView",
  components:{
    compSand
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>