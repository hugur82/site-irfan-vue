<template>

<navigationMobile v-if="mobileView" />
<div class="content" :class="{'open':showNav}" @click="closeShownav">
  <div id="navigation-icon" @click="commShowNav" v-if="mobileView">
    <i class="fas fa-bars"></i>
  </div>

  <nav :class="{navFixed:navFixIsActve}" v-if="!mobileView">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/sandwich">Sandwichs</router-link> |
    <router-link to="/pizzaPide">Pizzas and Pides</router-link> |
    <router-link to="/assiette">Assièttes</router-link> |
    <router-link to="/accomp">Accompagnements</router-link> |
    <router-link to="/about">Contact</router-link>
  </nav>

  <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">  
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
    
</div>
</template>

<script>
import { mapState } from "vuex"
import navigationMobile from '@/components/navigationMobile.vue'

  

  export default{
    data(){
      return {
        navFixIsActve:false,
        mobileView:false,
        resolution:750
      }
    },
    components:{
      navigationMobile,
    },
    computed: {
      ...mapState(['showNav']),
      
    },
    methods: {
      commShowNav(){
        this.$store.commit('COMMUT_SHOWNAV');
      },
      closeShownav(){
        if (this.showNav==true)
        this.$store.commit('CLOSE_SHOWNAV');
      },
      handleView(){
        this.mobileView = window.innerWidth < this.resolution ;
        if (this.mobileView==false && this.$store.state.showNav==true){
          this.commShowNav()
        }
      },
      
    },
    mounted() {
      this.handleView(),
      window.addEventListener('resize',()=>{
      this.handleView()
      });
      document.addEventListener('scroll',()=>{
        if (window.scrollY> 10)
        this.navFixIsActve=true;
        else
        this.navFixIsActve=false;
      })

    },
    
  }
</script>

<style lang="scss">
@import './assets/style.scss' ;

.fade-enter-active  {
transition: 680ms ease-in-out;
}
.fade-leave-active {
transition: 590ms cubic-bezier(.62,-0.01,.86,.39);

}
.fade-enter-from  {
opacity: 0;
transform: scale(0.01);
}
.fade-leave-to {
   opacity: 0;
transform:  scale(0.01);
}
.content {
  position : absolute;
  top: 10px;
  left:5px;
  right: 5px;
  width: auto;
  min-height:100vh ;
  padding: 0px 20px;
  background: rgb(44,126,238);
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(170, 167, 218, 0.2);
  transition: 900ms cubic-bezier(.62,.55,.74,1.33);
  
}
.open{
  transform: translateX(300px); 
  
}
#app {
  font-family:  Geneva, Tahoma, sans-serif,arial, Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(53, 50, 47);
}

#navigation-icon{
  z-index: 3;  
  font-size: xx-large;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  position: absolute;
  top:25px;
  i {
    font-size: 3rem;
  }

}
.navFixed{
  position:fixed;
  margin-top:0px;
  top:0px;
  left:0px;
  right:0px;
  max-width:none;
  border-radius: 0px;
  z-index: 5;
  background: rgb(231, 229, 229);
  transition:all ease 600ms;
  
}
nav {
  margin: 10px auto 0px auto;
  padding: 10px ;
  background: rgba(151, 167, 212, 0.507);
  max-width: 850px;
  border-radius: 25px;
  cursor: default;
  transition:all ease 600ms;

  a {
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    font-weight: 100;
    color: #15191a;
    &:hover{
      text-decoration: underline;
    }

    &.router-link-exact-active {
      font-size: 18px;
      font-weight: 900;
      
    }
  }
}


</style>
