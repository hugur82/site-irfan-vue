<template>

    <div id="navigationMobile">
        <ul >
            <li><router-link @click="commShowNav" to="/">Home</router-link></li>
            <li><router-link @click="commShowNav" to="/sandwich">Sandwichs</router-link></li>
            <li><router-link @click="commShowNav" to="/pizzaPide">Pizzas and Pides</router-link></li>
            <li><router-link @click="commShowNav" to="/assiette">Assièttes</router-link></li>
            <li><router-link @click="commShowNav" to="/accomp">Accompagnements</router-link></li>
            <li><router-link @click="commShowNav" to="/about">Contact</router-link></li>
        </ul>
    </div>
    
</template>

<script>
import { mapState } from "vuex"

export default {
    name:'navigationMobile',
    computed: {
        ...mapState(['showNav']),
        ShowNav(){
        return this.$store.state.showNav
      }
    },
    methods: {
        commShowNav(){
        this.$store.commit('COMMUT_SHOWNAV')
      }
    },
}
</script>

<style lang="scss" scoped>

#navigationMobile{
    padding: 20px 0 0 0 ;

    ul {
        text-decoration: none;
        list-style: none;
        width: 200px;
        padding-left: 40px;
        a{
            color: rgb(25, 96, 129);
            text-decoration: none;
            &:hover {
                color: rgb(185, 45, 45);
                
            }
        }
        li {
            color: #fff;
            font-size: x-large;
            font-weight: bold;
            margin-bottom: 20px;
            cursor: pointer;

            
        }
    }
}

</style>