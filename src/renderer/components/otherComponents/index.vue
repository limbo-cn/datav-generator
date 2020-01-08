<template>
  <div class="cus_component" :class="{ editor: editor }">
    <MySlider v-if="options && options.type === 'slider'" :option="options.slider"></MySlider>
    <MyButton v-if="options && options.type === 'button'" :option="options.button"></MyButton>
    <MyText v-if="options && options.type === 'text'" :option="options.text"></MyText>
    <MyImage v-if="options && options.type === 'image'" :option="options.image"></MyImage>
    <MySVG v-if="options && options.type === 'svg'" :option="options.svg"></MySVG>
  </div>
</template>

 <script>
import MySlider from './slider'
import MyButton from './button'
import MyText from './text'
import MyImage from './image'
import MySVG from './svg'

export default {
  props: ['options', 'editor'],
  components: {
    MySlider,
    MyButton,
    MyText,
    MyImage,
    MySVG
  }
}
</script>
<style lang="scss" scoped>
.cus_component {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
}
.editor {
  zoom: 0.5;
  pointer-events: none;
}
</style>