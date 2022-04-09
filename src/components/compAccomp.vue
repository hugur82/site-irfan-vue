<template>
  <div class="container">

  <div class="boucleProduits" v-for="idxAccomp,idx of foncAccomp" :key="idx">
    <div class="carte" :id="'accompId_' +idx" >
    
      <div class="cardImg" @click="show = !show">
        <transition name="bounce">
        <img v-if="show" width="210" height="140" v-bind:src="require('@/assets/img/'+idxAccomp.url)" alt="image">
        </transition>
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

</template>

<script>


export default {
  name: 'compAccomp',
 
  computed:{
    foncAccomp(){
      return this.$store.getters.getAccomp;
    }
  },
  data() {
    return {
      isActive:true,
      toggleGrand:false,
      show:true
    }
  },
    
  methods: {
    toggleSize(){
      this.toggleGrand = !this.toggleGrand
    },
    grow(event){
      console.log(event.currentTarget.id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
