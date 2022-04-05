<template>
    <ul>
        <div v-for="pizzaIdx,idx of foncPizza" :key="idx">
            <li>{{pizzaIdx.title}} : {{pizzaIdx.prix}} €</li>
        </div>       
    </ul>
</template>

<script>
export default {
    name:'compPizza',
    computed:{
        foncPizza(){
            return this.$store.getters.getPizza;
        }
    }
}
</script>