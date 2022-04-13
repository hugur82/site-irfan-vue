<template>
    <div class="boucleProduits">
        <div class="carte">
            <div class="cardImg">
                <img width="210" height="140" :src="url"> 
            </div>
            <div class="cardTitre">
                {{titre}}
            </div>
            <div class="cardDesc">
                {{prix}}
            </div>    
        </div>
       
    </div> 
</template>

<script>
export default {
    name:'compCard',
    props: {
        titre: {
            default:"",
       },
       prix: {
            default:0,
       },
       url: {
            default:"",
       }

    },
    
    
}
</script>