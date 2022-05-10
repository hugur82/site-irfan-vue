<template>

<navigationMobile v-if="mobileView" />
    
  
<div class="content" :class="{'open':showNav}">
  <fa id="navigation-icon" icon="bars" @click="commShowNav" v-if="mobileView"/>

  <nav :class="{navFixed:navFixIsActve}" v-if="!mobileView">
    <router-link to="/">Accueil</router-link> 
    <router-link to="/sandwich">Sandwichs</router-link> 
    <router-link to="/pizzaPide">Pizzas and Pides</router-link> 
    <router-link to="/assiette">Assiettes</router-link> 
    <router-link to="/accomp">Accompagnements</router-link> 
    <router-link to="/about">Contact</router-link>
  </nav>
  
  <router-view v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <div :key="route.name">  
        <component :is="Component"></component>
      </div>
    </Transition>
  </router-view>
  <br>
  <myFooter />
    
</div>
</template>

<script>
import { mapState } from "vuex"
import navigationMobile from '@/components/navigationMobile.vue'
import myFooter from "./components/myFooter.vue"
  
  export default{
    data(){
      return {
        navFixIsActve:false,
        resolution:750
      }
    },
    components:{
      navigationMobile, myFooter
    },
    computed: {
      ...mapState(['showNav','mobileView']),
      
    },
    methods: {
      commShowNav(){
        this.$store.commit('COMMUT_SHOWNAV')
      },
      commMobileView(){
        this.$store.commit('COMMUT_MOBILEVIEW')
      },
      handleView(){
        this.$store.state.mobileView = window.innerWidth < this.resolution ;
        if (this.$store.state.mobileView==false && this.$store.state.showNav==true){
          this.commShowNav();
          this.commMobileView();
        }
      },
      handleNavViewScroll(){
        if (window.scrollY> 10)
        this.navFixIsActve=true;
        else
        this.navFixIsActve=false;
      },      
    },
    mounted() {
      this.handleView(),
      window.addEventListener('resize',this.handleView);
      document.addEventListener('scroll',this.handleNavViewScroll);
    },
    beforeUnmount() {
      window.removeEventListener('resize',this.handleView);
      document.removeEventListener('scroll',this.handleNavViewScroll);
    },
    
  }
</script>

<style lang="scss">
@import './assets/style.scss' ;

.fade-enter-active  {
  transition: 580ms ease-in-out;
}
.fade-leave-active {
  transition: 490ms cubic-bezier(.62,-0.01,.86,.39);
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
  background: $colorBordeaux;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(170, 167, 218, 0.2);
  transition: 700ms cubic-bezier(.62,.55,.74,1.33);
  
}
.open{
  transform: translateX(300px); 
}
#app {
  font-family:   'Courgette', cursive , Tahoma, sans-serif,arial, Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: $backgroundBlack;
}

#navigation-icon{
  z-index: 10;
  font-size: xx-large;
  cursor: pointer;
  position: sticky;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0px;
  top:25px;
  left:25px;
  font-size: 3rem;
}
.navFixed{
  position:fixed;
  margin-top:0px;
  border-bottom: 1px solid $activeLinkWhite;
  align-items: center;
  top:0px;
  left:0px;
  right:0px;
  padding:  25px 10px 0px 10px;
  max-width:none;
  border-radius: 0px;
  height:50px;
  z-index: 5;
  background: $colorBordeauxShadowNoOpacity;
  transition:all ease 600ms;
  a.router-link-exact-active{
    color:$activeLinkWhite;
  }
  
}
nav {
  text-align:center;
  font-family:  'Permanent Marker', cursive, Geneva, Tahoma;
  margin: 10px auto 0px auto;
  padding: 10px ;
  background: $colorBordeauxShadow;
  max-width: 850px;
  border-radius: 25px;
  cursor: default;
  transition:all ease 600ms;
  
  a {
    cursor: pointer;
    text-decoration: none;
    padding: 5px;
    font-size: 17px;
    transition:all ease 600ms;
    color: $colorOrange;
    
    &:hover{
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color:$activeLinkWhite;
      text-decoration:none;
      cursor: default;
    }
  }
}


</style>
