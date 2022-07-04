<template class="carousel">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active img-fluid">
        <img src="../assets/slider-passion-1.jpg"
             class="d-block w-100" width="-10" height="360" alt="Kosmetikbild">
      </div>
      <div class="carousel-item">
        <img src="../assets/slider-passion-3.jpg"
             class="d-block w-100" width="-10" height="360" alt="Kosmetikbild">
      </div>
      <div class="carousel-item">
        <img src="../assets/slider-passion-2.jpg"
             class="d-block w-100" width="-10" height="360" alt="Kosmetikbild">
      </div>
      <div class="carousel-item">
        <img src="../assets/biocos.jpg"
             class="d-block w-100" width="-10" height="360" alt="Kosmetikbild">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'carousel'
}

</script>

<style scoped>

</style>
