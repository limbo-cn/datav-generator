<template>
  <div>
    <PieEdit
      v-if="option&& option.series[0].type === 'pie'"
      :option="option"
      @changeOption="changeOption"
    ></PieEdit>
    <LineEdit
      v-if="option&& option.series[0].type === 'line'"
      :option="option"
      @changeOption="changeOption"
    ></LineEdit>
    <BarEdit
      v-if="option&& option.series[0].type === 'bar'"
      :option="option"
      @changeOption="changeOption"
    ></BarEdit>
    <ScatterEdit
      v-if="option&& option.series[0].type === 'scatter'"
      :option="option"
      @changeOption="changeOption"
    ></ScatterEdit>
  </div>
</template>

 <script>
import PieEdit from './pieEdit'
import LineEdit from './lineEdit'
import BarEdit from './barEdit'
import ScatterEdit from './scatterEdit'

export default {
  props: ['option'],
  components: {
    PieEdit,
    LineEdit,
    BarEdit,
    ScatterEdit
  },
  watch: {

  },
  methods: {
    changeOption(option) {
      this.$emit('changeOption', option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>