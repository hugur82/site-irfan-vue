<template>
    <div  :class="{'forComputer':!mobileview, 'container-social':mobileView }">

        <a href="https://www.facebook.com/Restaurant-Chez-Irfan-1402647470025804/" target="_blank" class="button">
            <fa class="fab" :icon="['fab', 'facebook-f']" />
            
        </a>
        
        <a href="https://www.google.com/maps/place/Restaurant+Chez+irfan/@48.689785,7.884774,15z/data=!4m5!3m4!1s0x0:0xe88123c0bd84c896!8m2!3d48.689787!4d7.8847754" class="button" target="_blank">
            <fa class="fab" :icon="['fab', 'google']" />
            
        </a>
        
        <a href="https://www.tripadvisor.fr/Restaurant_Review-g4171779-d8768812-Reviews-Restaurant_Chez_Irfan-Gambsheim_Bas_Rhin_Grand_Est.html" class="button" target="_blank">
            <i class="fab fa-tripadvisor">
            </i>
            
        </a>

    </div >
</template>

<script>
import { mapState } from "vuex"

export default{
    name:'socialMedia',
    computed:{
        ...mapState(['mobileView'])
    },
    


}
</script>

<style lang="scss" scoped>


a {
    text-decoration: none;
}

.forComputer{
   background: rgba(157, 159, 214, 0.562);
    margin-left: auto;
    margin-right: auto;
    
    width:400px;
   
    height:6rem;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 4rem;
}
.container-social{
    background:none;
    font-size:2.5rem;
    width: 290px;
    display:flex;
    justify-content: space-evenly;
}
.fab {
    color:gold;
    transition: all 0.5s;
    &:hover{
        transform:scale(1.3);
    }
    
}
.fa-google{
    position:relative;
    &:hover{
        color:#EA4335;
    }
}
.fa-facebook-f{
    position:relative;
     &:hover{
            color:#1877F2;
        }
}
.fa-tripadvisor{
    position:relative;
    &:hover{
        color:#00af87;
    }
}
</style>