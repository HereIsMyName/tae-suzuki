<template>
  <div>
    <h2>Wall Paintings</h2>
    <div id='photo-gallery'>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images[0].pic" :images="images" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images2[0].pic" :images="images2" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images3[0].pic" :images="images3" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
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
        images : [
          {
            pic: require("../../photos/thailand/papita1.png"),
            desc: 'Papita',
            name: 'Thailand Wall Paintings'
          },
          {
            pic: require("../../photos/thailand/papita2.png"),
            desc: 'Papita'
          },
          {
            pic: require("../../photos/thailand/wallpainting1.png"),
            desc: 'Thailand Wall Painting'
          },
          {
            pic: require("../../photos/thailand/wallpainting2.png"),
            desc: 'Thailand Wall Painting'
          },
          {
            pic: require("../../photos/thailand/wallpainting3.png"),
            desc: 'Thailand Wall Painting'
          },
          {
            pic: require("../../photos/thailand/wallpainting4.png"),
            desc: 'Thailand Wall Painting'
          },
          {
            pic: require("../../photos/thailand/wallpainting5.png"),
            desc: 'Thailand Wall Painting'
          },
        ],
        images2: [
          {
            pic: require("../../photos/others/retablo.jpg"),
            desc: 'Retablo',
            name: 'Mexico'
          }
        ],
        images3: [
          {
            pic: require("../../photos/others/branwen.jpg"),
            desc: 'St. Augustine',
            name: 'St. Augustine'
          }
        ]
      }
    },
  }
</script>
<style scoped>
  .hidebord {
    border: none
  }
</style>