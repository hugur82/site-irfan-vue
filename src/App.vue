<template>
    <div id="navigation-icon" v-if="mobileView">
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
 
</template>

<script>
  export default{
    data(){
      return {
        mobileView:false,
        showNav:false,
      }
    },
    methods: {
      handleView(){
        this.mobileView = window.innerWidth < 600 ;
      }
    },
    mounted() {
      this.handleView(),
      window.addEventListener('resize',()=>{
        this.mobileView = window.innerWidth < 600 ;
        // console.log(window.innerWidth);
      })
    },
    
    
  }
</script>

<style lang="scss">
@import './assets/style.css' ;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(53, 50, 47);
}

#navigation-icon{
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
    font-weight: bold;
    color: #1b8af8;

    &.router-link-exact-active {
      color: #2f21a7;
    }
  }
}
</style>
