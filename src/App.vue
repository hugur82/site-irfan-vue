<template>

<navigationMobile v-if="mobileView" />
<div class="content" :class="{'open':showNav}">
  <div id="navigation-icon" @click="commShowNav" v-if="mobileView">
    <i class="fas fa-bars"></i>
  </div>

  <nav v-if="!mobileView">
    <router-link to="/">Home</router-link> |
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
        this.$store.commit('COMMUT_SHOWNAV')
      },
      handleView(){
        this.mobileView = window.innerWidth < this.resolution ;
        if (this.mobileView==false && this.$store.state.showNav==true){
          this.commShowNav()
        }
      }
    },
    mounted() {
      this.handleView(),
      window.addEventListener('resize',()=>{
      this.handleView()
      });
    },
    
    
  }
</script>

<style lang="scss">
@import './assets/style.scss' ;

.fade-enter-active  {
transition: 700ms cubic-bezier(.63,.49,.44,.94);
}
.fade-leave-active {
transition: 700ms cubic-bezier(.62,-0.01,.86,.39);

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
  padding: 20px;
  
  background: rgb(44,126,238);
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  width: 30px;
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  i {
    font-size: 2rem;
  }

}

nav {
  
  padding: 10px;
  background: rgba(196, 196, 196, 0.449);
  

  a {
    
    backdrop-filter: blur(2px);
    text-decoration: none;
    font-size: 18px;
    font-weight: 100;
    color: #2e5d69;
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
