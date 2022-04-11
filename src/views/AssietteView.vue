<template>
  <h1>This is Assiettes page</h1>
  <div class="container">
    <compCard v-for="itemAssiette,idx of foncAssiette" :key="idx" :titre="itemAssiette.title" :prix="itemAssiette.prix" :url="require('@/assets/img/'+itemAssiette.url)"/>
    </div>
</template>

<script>
import compCard from '@/components/compCard.vue'

export default {
  name:"AssietteView",
  components:{
    compCard
  },
  computed:{
    foncAssiette(){
      return this.$store.getters.getAssiette;
    }
  }
  
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>
