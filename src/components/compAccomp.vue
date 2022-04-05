<template>
   <ul>
      <div class="about" v-for="acc2,idx2 of foncAccomp2" v-bind:key="idx2">
        <li> {{acc2.title}} : {{acc2.prix}} €</li>
      </div>
    </ul>
    
  
</template>

<script>
export default {
  name: 'compAccomp',
  computed:{
    foncAccomp2(){
      return this.$store.getters.getAccomp;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
