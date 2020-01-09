<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'limbo-vs'
}
</script>

<style lang="scss">
html {
  height: 100%;
  body {
    margin: 0;
    padding: 0;
    font-family: "webfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    #app {
      height: 100%;
    }
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

@font-face {
  font-family: "webfont";
  font-display: swap;
  src: url("./assets/font/webfont.eot"); /* IE9 */
  src: url("./assets/font/webfont.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/font/webfont.woff2") format("woff2"),
    url("./assets/font/webfont.woff") format("woff"),
    /* chrome、firefox */ url("./assets/font/webfont.ttf") format("truetype"),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url("./assets/font/webfont.svg#webfont") format("svg"); /* iOS 4.1- */
}
</style>
