<template>
  <div>
    <h2>1990 2040</h2>
    <div id='photo-gallery'>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images[0].pic" :images="images" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
    </div>
    <div class="vidbody" v-if="hideThumb">
      <h2>Videos</h2>
      <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/No5Rpqo6lR8" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div> 
      <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/VFAI_qZeMCE" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div> 
      <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/BGHOClVYEIo" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div> 
      <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/v2vHEc77l_o" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div> 
      <!-- <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/n7pYa3x2kds" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div>  -->
    </div>
  </div>
</template>
<script>
import lightbox from '../lightbox.vue'

  export default {
    name: 'app',
    components: {
      lightbox 
    },
    data () {
      return {
        hideThumb: true,
          images: [
            {
              pic: require("../../photos/1990_2040/1990 2040 whole1.jpg"),
              desc: 'whole',
              name: '1990 2040'
            },
            {
              pic: require("../../photos/1990_2040/25.jpg"),
              desc: '25'
            }
          ]
      }
    }
  }
</script>
<style scoped>
  .hidebord {
    border: none
  }
</style>