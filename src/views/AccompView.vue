<template>
  <h1>This is Accomp page</h1>
    <ul>
      <div class="about" v-for="acc,idx of foncAccomp" v-bind:key="idx">
        <li> {{acc.title}} : {{acc.prix}} €</li>
      </div>
    </ul>
</template>

<script>


export default {
  name:"AccompView",
  computed:{
    foncAccomp(){
      return this.$store.getters.getAccomp;
    }
  }
}
</script>
