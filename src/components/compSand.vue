<template>
    <ul>
        <div class="about" v-for="sandIdx,idx in foncSand" :key="idx">
            <li>{{sandIdx.title}} : {{sandIdx.prix}} €</li>
        </div>
    </ul>
</template>

<script>
export default {
    name:'compSand',
    computed:{
        foncSand(){
            return this.$store.getters.getSandwichs;
        }
    }
}
</script>