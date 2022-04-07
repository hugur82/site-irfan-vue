<template>
<div class="container">
  <div class="boucleProduits" v-for="idxAccomp,idx of foncAccomp" :key="idx">
    <div class="carte">
      <div class="cardImg">
        <img width="210" height="140" v-bind:src="require('@/assets/img/'+idxAccomp.url)" alt="image">
      </div>
      <div class="cardTitre">
        {{idxAccomp.title}}
      </div>
      <div class="cardDesc">
        {{idxAccomp.prix}} €
        
      </div>
    </div>
    
  </div>


</div>

   <!-- <ul>
      <div class="about" v-for="acc,idx of foncAccomp" v-bind:key="idx">
        <li> {{acc.title}} : {{acc.prix}} €</li>
      </div>
    </ul>   -->
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
