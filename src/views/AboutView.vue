<template>

  <div class="viewContainer">
    <h1>Restaurant Chez Irfan</h1>
    <p><fa icon="house" /> 20 Rue de la Mairie, 67760 Gambsheim</p>
    <p><fa icon="phone" /> <a href="tel:+3388515252">03 88 51 52 52</a></p>
    
      <p><table align="center" >
        <th colspan="2"><fa icon="calendar" /> Horraires</th>
        <tr><td width="110px" align="right">lundi </td><td width="250px" align="left"> Fermé</td></tr>
        <tr><td width="110px" align="right">mardi </td><td width="250px" align="left"> 11:30–14:00, 17:30–21:00</td></tr>
        <tr><td width="110px" align="right">mercredi </td><td width="250px" align="left"> 11:30–14:00, 17:30–21:00</td></tr>
        <tr><td width="110px" align="right">jeudi </td><td width="250px" align="left"> 11:30–14:00, 17:30–21:00</td></tr>
        <tr><td width="110px" align="right">vendredi </td><td width="250px" align="left"> 11:30–14:00, 17:30–22:00</td></tr>
        <tr><td width="110px" align="right">samedi </td><td width="250px" align="left"> 11:30–14:00, 17:30–22:00</td></tr>
        <tr><td width="110px" align="right">dimanche </td><td width="250px" align="left"> Fermé</td></tr>        
      </table>
      
     </p>
     <socialMedia v-if="!mobileView"/>
  </div>
  
  
 
</template>

<script>
 import socialMedia from '@/components/socialMedia.vue'
 import { mapState } from 'vuex' 

export default {
  name:"AboutView",
  components:{
    socialMedia
  }, 
  computed: {
    ...mapState(['mobileView'])
  },
 }
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
  color: black;
}
table{
 border-spacing: 8px;
}
tr{
   transition: all 1s ease;
}
tr:hover{

  transition: all 1s ease;
  font-weight: 800;
}

</style>