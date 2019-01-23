<template>
  <div>
    <h2>Galleries</h2>
    <div id='photo-gallery'>
      <div class="gallery">
        <router-link class="nav-link" to="/galleries/projects">
          <img src="../../photos/1990_2040/25.jpg" id="projects" alt="projects" />
        </router-link>
        <div class="desc">
          Projects
        </div>
      </div>
      <div class="gallery">
        <router-link class="nav-link" to="/galleries/drawings">
          <img src="../../photos/drawings/drawing1.jpg" id="drawings" alt="drawings" />
        </router-link>
        <div class="desc">
          Drawings
        </div>
      </div>
      <div class="gallery">
        <router-link class="nav-link" to="/galleries/wall-paintings">
          <img src="../../photos/thailand/papita1.png" id="wall-paintings" alt="wall-paintings" />
        </router-link>
        <div class="desc">
          Wall Paintings
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>