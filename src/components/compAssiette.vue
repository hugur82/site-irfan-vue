<template>
    <ul>
        <div v-for="assietteIdx,idx of foncAssiette" :key="idx">
            <li> {{assietteIdx.title}} : {{assietteIdx.prix}} € </li>
        </div>
    </ul>

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