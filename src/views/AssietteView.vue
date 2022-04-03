<template>
  <h1>This is Assiettes page</h1>
    <ul>
      <div class="about" v-for="assiette,idx in foncAssiette" :key="idx">
        <li> {{assiette.title}} : {{assiette.prix}} €</li>
      </div>
    </ul>
</template>

<script>

export default {
  name:"AssietteView",
  computed:{
    foncAssiette(){
      return this.$store.getters.getAssiette;
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
</style>
