<template>
  <div>
    <h2>Drawings</h2>
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
            pic: require("../../photos/drawings/drawing1.jpg"),
            desc: 'Drawing',
            name: 'Drawing'
          },
          {
            pic: require("../../photos/drawings/drawing2.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing3.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing4.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing5.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing6.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing7.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing8.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing9.jpg"),
            desc: 'Drawing',
          },
          {
            pic: require("../../photos/drawings/drawing10.jpg"),
            desc: 'Drawing',
          },
        ],
        images2: [
          {
            pic: require("../../photos/thailand/drawing1.png"),
            desc: 'Thailand Drawing',
            name: 'Thailand Drawings'
          },
          {
            pic: require("../../photos/thailand/drawing2.png"),
            desc: 'Thailand Drawing',
          },
          {
            pic: require("../../photos/thailand/drawing3.png"),
            desc: 'Thailand Drawing',
          },
          {
            pic: require("../../photos/thailand/drawing4.png"),
            desc: 'Thailand Drawing',
          },
          {
            pic: require("../../photos/thailand/drawing5.png"),
            desc: 'Thailand Drawing',
          },
          {
            pic: require("../../photos/thailand/drawing6.png"),
            desc: 'Thailand Drawing',
          },
          {
            pic: require("../../photos/thailand/drawing7.png"),
            desc: 'Thailand Drawing',
          },
        ],
        images3: [
          {
            pic: require("../../photos/thailand/drawing1.png"),
            desc: 'Thailand Drawing',
            name: 'Other Drawings'
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