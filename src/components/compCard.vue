<template>
   
    <div class="boucleProduits">
        <div class="carte">
            <div class="cardImg">
                <img width="210" height="140" :src="require('@/assets/img/'+tabProduct.url)"> 
            </div>
            <div class="cardTitre">
                {{tabProduct.title}}
            </div>
            <div class="cardDesc">
                {{tabProduct.prix}} €
            </div>    
        </div>
       
    </div> 
</template>

<script>
export default {
    name:'compCard',
    props: {
       tabProduct:{
           default:"",
       }

    },
    
    
}
</script>