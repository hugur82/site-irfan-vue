<template>
   <ul>
      <div class="about" v-for="acc,idx of foncAccomp" v-bind:key="idx">
        <li> {{acc.title}} : {{acc.prix}} €</li>
      </div>
    </ul>  
</template>

<script>
export default {
  name: 'compAccomp',
  computed:{
    foncAccomp(){
      return this.$store.getters.getAccomp;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
