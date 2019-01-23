<template>
  <div @keydown.right='next'>
     <a href="#" @click.prevent="show" v-if="hidethumb">
          <img :src="thumb" class="pics">
      </a>
      <div class="desc" v-if="hidethumb">
          {{images[index].name}}
        </div>
      <div class="lightbox" v-if="visible" @click="hide">
        <div class="exit" @click.stop="hide">&times;</div>
        <div id='count'>{{index + 1}} / {{images.length}}</div>
        <div class="lightbox-pic">
            <img :src="images[index].pic">
            <br />
            <span id='des'>{{images[index].desc}}</span>
        </div>
        <br />
        <div class="prevArrow"
            @click.stop="prev"
            :class="{'invisible': ! isPrev()}">
        <svg class="pointer-events-none" fill="#fff" height="80" viewBox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
        </svg>
        </div>
        <div class="nextArrow"
                @click.stop="next"
                :class="{'invisible': ! isNext()}">
            <svg class="pointer-events-none" fill="#fff" height="80" viewBox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        thumb: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: () => [],
        },
        hidethumb: {
            type: Boolean
        },
        desc: {
            type: String
        }
    },
    data() {
        return {
            visible: false,
            hideThumb: this.hidethumb,
            index: 0,
        };
    },
    methods: {
        show() {
            this.visible = true;
            this.hideThumb = false
            this.$emit('shown', this.hideThumb)
        },
        hide() {
            this.visible = false;
            this.hideThumb = true
            this.$emit('shown', this.hideThumb)
            this.index = 0;
        },
        isPrev() {
            return this.index - 1 >= 0;
        },
        isNext() {
            return this.index + 1 < this.images.length;
        },
        prev() {
            if (this.isPrev()) 
                this.index -= 1;
        },
        next() {
            if (this.isNext()) 
                this.index += 1;
        },
        keyPress(e) {
            if (this.visible) {
                if(e.key == 'ArrowRight') {
                    this.next()
                    return
                }
                else if(e.key == 'ArrowLeft') {
                    this.prev()
                    return
                }
                else if(e.key == ' ') {
                    e.preventDefault()
                    return
                }
                else if(e.key == 'Escape') {
                    this.hide()
                    return
                }
            }
        }
      
    },
    mounted() {
        window.addEventListener('keydown', this.keyPress)
    },
    destroyed() {
        window.removeEventListener('keydown', this.keyPress)
    },
};

</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .95);
    text-align: center;
  }
  .lightbox-pic {
    display: inline-block;
    margin: 0 auto;
    width: auto;
    min-height: 67.5vh !important;
    max-height: 70vh;
  }
  .lightbox-pic img {
      width: auto;
      height: auto;
      max-height: 60vh;
      max-width: 100vw;
  }
  .prevArrow {
    display: inline-block; 
    position: fixed;
    left: 20px;
    margin-top: -35px;
    cursor: pointer;
  }
  .nextArrow {
    display: inline-block;
    position: fixed;
    right: 20px;
    margin-top: -35px;
    cursor: pointer;
  }
  .exit {
      position: fixed;
      top: -14px;
      right: 4%;
      font-size: 3em;
      color: white;
      cursor: pointer;
  }
  .invisible {
      opacity: .3;
      cursor: default
  }
  #des {
      color: white
  }
  #count {
      padding-top: 6px;
      font-size: 1.2em;
      color: white
  }
  @media only screen and (min-width: 750px) {
    .lightbox-pic {
        position: relative;
        top:6%;
    }
    .lightbox-pic img {
        width: auto;
        height: 350px;
        max-height: 50%;
    }
    .exit {
        top: 60px;
        right: 15%;
    }
    .prevArrow {
        position: absolute;
        top: 200px;
        left: 8%;
    }
    .nextArrow {
        position: absolute;
        top: 200px;
        right: 8%;
    }
  }
</style>