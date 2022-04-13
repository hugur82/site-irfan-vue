<template>
    <div class="boucleProduits">
         <button @click="effacer">toggle</button>
        <div class="carte" v-if="showItem" >
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
            default:"salut",
       },
       prix: {
            default:0,
       },
       url: {
            default:"url",
       }

    },
    data() {
        return {
            showItem:true
        }
    },
    methods: {
        effacer(){
            this.showItem=!this.showItem;
        }
    },
    
}
</script>