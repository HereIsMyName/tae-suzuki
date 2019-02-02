<template>
  <div>
    <h2>Projects</h2>
    <div id='photo-gallery'>
      <div class="gallery" v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <router-link to="/galleries/1990-2040" v-bind:class="[{gone: !hideThumb }, 'nav-link']">
          <img src="../../photos/1990_2040/1990 2040 whole1.jpg" id="projects" alt="projects" />
        </router-link>
        <div class="desc" v-bind:class="[{gone:! hideThumb }, '']">
          1990 2040
        </div>
      </div>
      <div class="gallery" v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <router-link to="/galleries/family" v-bind:class="[{gone: !hideThumb }, 'nav-link']">
          <img src="../../photos/family/brothersShoes1.jpg" id="projects" alt="projects" />
        </router-link>
        <div class="desc" v-bind:class="[{gone:! hideThumb }, '']">
          Family
        </div>
      </div>
      <div class="gallery" v-bind:class="[{hidebord:! hideThumb }, 'gallery']">
        <router-link to="/galleries/embroidery" v-bind:class="[{gone: !hideThumb }, 'nav-link']">
          <img src="../../photos/embroidery/embroidery1.jpg" id="projects" alt="projects" />
        </router-link>
        <div class="desc" v-bind:class="[{gone:! hideThumb }, '']">
          Embroidery
        </div>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images1[0].pic" :images="images1" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
        <lightbox :thumb="images2[0].pic" :images="images2" :hidethumb='hideThumb' @shown="hideThumb = $event"/>
      </div>
      <div v-bind:class="[{hidebord: !hideThumb }, 'gallery']">
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

        images1: [
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
        images2: [
          {
            pic: require("../../photos/others/mask1.jpg"),
            desc: 'Upside-Down Mask',
            name: 'Upside-Down Mask'
          }
        ],
        images3: [
          {
            pic: require("../../photos/others/IAmTae.jpg"),
            desc: 'I am TAE',
            name: 'I am TAE'
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
  .gone {
    display: none
  }

 @media only screen and (max-width: 740px) {
    #videoScrollMsg {
      display: none;
    }
  }
</style>