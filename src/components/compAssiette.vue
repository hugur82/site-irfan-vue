<template>
    <div class='container'>   
        <div class="boucleProduits" v-for="assietteIdx,idx of foncAssiette" :key="idx">
            <div class="carte">
                <div class="cardImg">
                 <img width="210" height="140" :src="require('@/assets/img/' + assietteIdx.url )" />
                </div>
                <div class="cardTitre">
                    {{assietteIdx.title}}
                </div>
                
                <div class="cardDesc">
                    {{assietteIdx.prix}} €
                </div>
            </div>
        </div>
    </div>
    <!-- <ul>
        <div v-for="assietteIdx,idx of foncAssiette" :key="idx">
            <li> {{assietteIdx.title}} : {{assietteIdx.prix}} € </li>
        </div>
    </ul> -->
</template>

<script>
export default {
    name:'compAssiette',
    
    computed: {
        foncAssiette(){
            return this.$store.getters.getAssiette;
        }
    }
}
</script>