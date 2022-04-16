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
        
          <router-view/>
            
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

.content {
  position : absolute;
  top: 10px;
  left:5px;
  right: 5px;
  width: auto;
  min-height:400px ;
  padding: 20px;
  background-color: rgb(131, 153, 199);
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1500ms cubic-bezier(.58,-0.49,.6,1.33);
}
.open{
  transform: translateX(300px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  height: 50px;
  padding: 10px;
  

  a {
    text-decoration: none;
    font-weight: bold;
    color: #251f5e;

    &.router-link-exact-active {
      color: #308d18;
    }
  }
}

</style>
