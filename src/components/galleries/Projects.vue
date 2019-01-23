<template>
  <div>
    <h2>Projects</h2>
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
    <div class="textbody" v-if="hideThumb">
        <h2>Videos / 1990 2040</h2>
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
            pic: require("../../photos/1990_2040/25.jpg"),
            desc: '25',
            name: '1990 2040'
          },
          {
            pic: require("../../photos/1990_2040/1990 2040 whole1.jpg"),
            desc: 'whole'
          }
        ],
        images2: [
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
          {
            pic: require("../../photos/family/familyDrawing1.jpg"),
            desc: 'Family Drawing'
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
          },
          {
            pic: require("../../photos/family/Hojo no Sekibutsu1.png"),
            desc: 'Hojo no Sekibutsu'
          },
          {
            pic: require("../../photos/family/Hojo no Sekibutsu2.png"),
            desc: 'Hojo no Sekibutsu'
          },
          {
            pic: require("../../photos/family/mandara.jpg"),
            desc: 'Mandara'
          },
          {
            pic: require("../../photos/family/parentsStainedGlass1.jpg"),
            desc: 'Parents Stained Glass'
          },
          {
            pic: require("../../photos/family/parentsStainedGlass2.jpg"),
            desc: 'Parents Stained Glass'
          },
          {
            pic: require("../../photos/family/TaeFuton1.jpg"),
            desc: 'Tae Futon'
          },
          {
            pic: require("../../photos/family/TaeFuton2.jpg"),
            desc: 'Tae Futon'
          },
        ],
        images3: [
          {
            pic: require("../../photos/embroidery/embroidery1.jpg"),
            desc: 'Embroidery',
            name: 'Embroidery'
          }
        ],
        images4: [
            {
            pic: require("../../photos/woodcut/woodcut_both.jpg"),
            desc: 'Woodcut Both',
            name: 'Woodcut'
          },
          {
            pic: require("../../photos/woodcut/blackAndWhite1.jpg"),
            desc: 'Woodcut'
          },
          {
            pic: require("../../photos/woodcut/blackAndWhite2.jpg"),
            desc: 'Woodcut'
          },
        ],
        images5: [
          {
            pic: require("../../photos/others/mask1.jpg"),
            desc: 'Upside-Down Mask',
            name: 'Upside-Down Mask'
          }
        ],
        images6: [
          {
            pic: require("../../photos/others/IAmTae.jpg"),
            desc: 'I Am Tae',
            name: 'I Am Tae'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .hidebord {
    border: none
  }
</style>