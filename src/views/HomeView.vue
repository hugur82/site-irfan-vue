<template>

  <div class="viewContainer">
  <div class="containerImgAcc">
    <div class="descAcc">
      <h1>Restaurant chez Irfan</h1>
      <p>
        Le restaurant chez Irfan à été créer en 2014 et porte le nom du propriétaire. Nous proposons des kebabs, grillades et pizzas. Situé à Gambsheim, nous serons heureux de vous accueillir en salle ou en terrasse.
      </p> 
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
}
</script>

<style scoped>
.containerImgAcc{
  margin: auto;
  z-index: 1;
  background-image: url("../assets/img/imageAccueil.jpg");
  max-width:850px;
  height: 650px;
  object-fit: none;
  }
.descAcc{
  color:rgb(255, 255, 255);
  background: rgba(0, 0, 0, 0.349);
  backdrop-filter:   blur(2px);
  content: center;
  font-size: x-large;
  padding: 5px;
}

</style>