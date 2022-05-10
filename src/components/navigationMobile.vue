<template>

    <div id="navigationMobile">
        <ul >
            <li><router-link @click="commShowNav" to="/">Accueil</router-link></li>
            <li><router-link @click="commShowNav" to="/sandwich">Sandwichs</router-link></li>
            <li><router-link @click="commShowNav" to="/pizzaPide">Pizzas and Pides</router-link></li>
            <li><router-link @click="commShowNav" to="/assiette">Assiettes</router-link></li>
            <li><router-link @click="commShowNav" to="/accomp">Accompagnements</router-link></li>
            <li><router-link @click="commShowNav" to="/about">Contact</router-link></li>
        </ul>
        <socialMedia />
    </div>
    
</template>

<script>
import socialMedia from '@/components/socialMedia.vue'
import { mapState } from "vuex"

export default {
    name:'navigationMobile',
    components:{
        socialMedia
    },
    computed: {
        ...mapState(['showNav']),
    },
    methods: {
        commShowNav(){
        this.$store.commit('COMMUT_SHOWNAV')
      }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss' ;

#navigationMobile{
    padding: 15px 0 0 0 ;
    position:fixed;
    font-family:  'Permanent Marker', cursive, Geneva, Tahoma;

    ul {
        text-decoration: none;
        list-style: none;
        width: 200px;
        padding-left: 40px;
        a{
            color: $colorOrange;
            font-size: x-large;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            &:hover {
                text-decoration:  underline;
            }
            &.router-link-exact-active {
                text-decoration:  none;
                color: $activeLinkWhite;
                cursor: default;
            }
            
        }
        
        li {
            
            
            margin-bottom: 20px;
            

            
        }
    }
}

</style>