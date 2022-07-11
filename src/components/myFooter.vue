<template>
    <div class="piedPage"
    v-motion
    :initial="{opacity:0, x : 200, scale : 0.70}"
    :visible="{opacity:1, x : 0, scale : 0.9}"
    >
    <span>Restaurant Chez Irfan</span>
    <span>20 Rue de la Mairie, 67760 Gambsheim</span>
    <span>03 88 51 52 52</span>
        
    </div>
</template>

<script>
export default {
    name:"myFooter"
}
</script>

<style lang="scss" scoped>

.piedPage {
    
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    max-width: 800px;
    margin:0px auto ;
    column-gap: 15px;
}

@media screen and (max-width: 750px){
    .piedPage {
        flex-direction:column ;
        align-items: center;
        width: 90%;
    }

}
</style>