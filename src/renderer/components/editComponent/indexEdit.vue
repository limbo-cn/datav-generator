<template>
  <div class="edit_wrapper">
    <MyTextEdit
      v-if="options && options.type ==='text'"
      :option="options.text"
      @changeOption="changeOption"
    />
    <MyImageEdit
      v-if="options && options.type ==='image'"
      :option="options.image"
      @changeOption="changeOption"
    />
    <MySVGEdit
      v-if="options && options.type ==='svg'"
      :option="options.svg"
      @changeOption="changeOption"
    />
    <MySliderEdit
      v-if="options && options.type ==='slider'"
      :option="options.slider"
      @changeOption="changeOption"
    />
  </div>
</template>

 <script>
import MyTextEdit from './textEdit'
import MyImageEdit from './imageEdit'
import MySVGEdit from './svgEdit'
import MySliderEdit from './sliderEdit'

export default {
  props: ['options'],
  components: {
    MyTextEdit,
    MyImageEdit,
    MySVGEdit,
    MySliderEdit
  },
  methods: {
    changeOption(val) {
      this.options[`${this.options.type}`] = val
      this.$emit('changeOptions', this.options)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit_wrapper {
  height: 238px;
  border-top: 1px solid #e6e6e6;
}
</style>