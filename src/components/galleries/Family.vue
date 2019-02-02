<template>
  <div>
   <h2>Family</h2>
    <div id='photo-gallery'>
      <div v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <lightbox :thumb="images[0].pic" :images="images" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images2[0].pic" :images="images2" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images3[0].pic" :images="images3" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images4[0].pic" :images="images4" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images5[0].pic" :images="images5" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images6[0].pic" :images="images6" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
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
              pic: require("../../photos/family/brothersShoes1.jpg"),
              desc: 'Brothers Shoes',
              name: 'Family'
            },
            {
              pic: require("../../photos/family/brothersShoes2.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes3.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes4.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes5.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes6.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes7.jpg"),
              desc: 'Brothers Shoes'
            },
            {
              pic: require("../../photos/family/brothersShoes8.jpg"),
              desc: 'Brothers Shoes'
            },
          ],
          images2: [
            {
              pic: require("../../photos/family/familyDrawing1.jpg"),
              desc: 'Family Drawing',
              name: 'Family Drawings'
            },
            {
              pic: require("../../photos/family/familyDrawing2.jpg"),
              desc: 'Family Drawing'
            },
            {
              pic: require("../../photos/family/familyDrawing3.jpg"),
              desc: 'Family Drawing'
            },
            {
              pic: require("../../photos/family/familyDrawing4.jpg"),
              desc: 'Family Drawing'
            },
            {
              pic: require("../../photos/family/familyDrawing5.jpg"),
              desc: 'Family Drawing'
            },
            {
              pic: require("../../photos/family/familyDrawing6.jpg"),
              desc: 'Family Drawing'
            }
          ],
          images3: [
            {
              pic: require("../../photos/family/Hojo no Sekibutsu1.jpg"),
              desc: 'Hojo no Sekibutsu',
              name: 'Hojo no Sekibutsu'
            },
            {
              pic: require("../../photos/family/Hojo no Sekibutsu2.png"),
              desc: 'Hojo no Sekibutsu'
            },
            {
              pic: require("../../photos/family/Hojo no Sekibutsu3.png"),
              desc: 'Hojo no Sekibutsu'
            }
          ],
          images4: [
            {
              pic: require("../../photos/family/mandara.jpg"),
              desc: 'Mandara',
              name: 'Mandara'
            }
          ],
          images5: [
            {
              pic: require("../../photos/family/parentsStainedGlass2.jpg"),
              desc: 'Parents Stained Glass',
              name: 'Parents Stained Glass'
            },
            {
              pic: require("../../photos/family/parentsStainedGlass1.jpg"),
              desc: 'Parents Stained Glass'
            }
          ],
          images6: [
            {
              pic: require("../../photos/family/TaeFuton1.jpg"),
              desc: 'Tae Futon',
              name: 'Tae Futon'
            },
            {
              pic: require("../../photos/family/TaeFuton2.jpg"),
              desc: 'Tae Futon'
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