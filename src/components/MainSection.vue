<template>
  <div class="layer">
    <div class="row">
      <div class="col-1">
        <div id="imgTop" class="logocon">
          <img  id="mobilelogo" src="../assets/tw_logo.png">
            </div>
            <div class="nav">
              <div class="navlist">
                <router-link class="nav-link" to="/" active-class="active">
                  <li class="navitem" id="about">About</li>
                </router-link>
                <router-link class="nav-link" to="/artist-statement">
                  <li class="navitem" id="statement">Artist Statement</li>
                </router-link>
                <router-link class="nav-link" to="/galleries">
                  <li class="navitem" id="pictures">Galleries</li>
                </router-link>
                <router-link class="nav-link" to="/contact">
                  <li class="navitem" id="contact">Contact </li>
                </router-link>
              </div>
            </div>
        </div>
        <div class="col-2">
          <div id="logoRest">
            <img id="logo" src="../assets/tw_logo.png" alt="Tae Suzuki">
          </div>
          <div id="container">
            <router-view></router-view>
          </div>
        </div>
        <div class="col-3">
          <div class="smlinks">
            <a href="https://www.behance.net/1990tae2040" target="_blank" alt='behance' title='Behance'>
              <img src="../assets/behance_icon.svg">
                </a>
                <a href="https://ello.co/taesuzuki" target="_blank" alt='ello' title='Ello'>
                  <img src="../assets/ello_icon.svg">
                </a>
                <a href="https://www.instagram.com/tae89eat89tae/?r=nametag" target="_blank" alt='instagram' title='Instagram'>
                  <img src="../assets/instagram_icon.svg">
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainSection',
  props: {
  },
  components: {
  }
}
</script>

<style scoped>

</style>
