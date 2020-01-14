<template>
  <div class="edit_wrapper">
    <MyTextEdit
      v-if="options && options.type ==='text'"
      :option="options.text"
      :events="options.events"
      @changeOption="changeOption"
    />
    <MyImageEdit
      v-if="options && options.type ==='image'"
      :option="options.image"
      :events="options.events"
      @changeOption="changeOption"
    />
    <MySVGEdit
      v-if="options && options.type ==='svg'"
      :option="options.svg"
      :events="options.events"
      @changeOption="changeOption"
    />
    <MySliderEdit
      v-if="options && options.type ==='slider'"
      :option="options.slider"
      :events="options.events"
      @changeOption="changeOption"
    />
    <MyButtonEdit
      @changeEvents="changeEvents"
      v-if="options && options.type ==='button'"
      :option="options.button"
      :events="options.events"
      @changeOption="changeOption"
    />
  </div>
</template>

 <script>
import MyTextEdit from './textEdit'
import MyImageEdit from './imageEdit'
import MySVGEdit from './svgEdit'
import MySliderEdit from './sliderEdit'
import MyButtonEdit from './buttonEdit'

export default {
  props: ['options'],
  components: {
    MyTextEdit,
    MyImageEdit,
    MySVGEdit,
    MySliderEdit,
    MyButtonEdit
  },
  methods: {
    changeOption(val) {
      this.options[`${this.options.type}`] = val
      this.$emit('changeOptions', this.options)
    },
    changeEvents(events) {
      this.options.events = events
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