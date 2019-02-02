<template>
  <div>
    <h2>Embroidery</h2>
    <div id='photo-gallery'>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images[0].pic" :images="images" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
    </div>
    <div class="vidbody" v-if="hideThumb">
      <h2>Videos</h2>
      <div class="vidgallery"> 
          <iframe src="https://www.youtube.com/embed/n7pYa3x2kds" 
          frameborder="0" allow="autoplay; encrypted-media" 
          allowfullscreen></iframe> 
      </div> 
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
              pic: require("../../photos/embroidery/embroidery1.jpg"),
              desc: 'Embroidery',
              name: 'Embroidery'
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