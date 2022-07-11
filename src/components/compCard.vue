<template>
<div class="boucleProduits">
  <div 
    class="carte"
    v-motion
    :initial="{
      opacity:0,
      x : 200,
      scale : 0.70
      }"
    :visibleOnce="{
      opacity:1,
      x : 0,
      scale : 0.9,
      transition:{
        duration:500,
        }
      }"
    
    >
    <div class="cardImg">
      <img width="210" height="140" :src="require('@/assets/img/'+tabProduct.url)"> 
    </div>
    <div class="cardTitre">
      {{tabProduct.title}}
    </div>
    <div class="cardDesc">
      {{tabProduct.prix}} €
    </div>    
  </div>
</div>
</template>

<script>
export default {
    name:'compCard',
    props: {
      tabProduct:{
          default:"",
      }
    },
}
</script>

<style scoped>

</style>