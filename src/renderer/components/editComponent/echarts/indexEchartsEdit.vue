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
    <GaugeEdit
      v-if="option&& option.series[0].type === 'gauge'"
      :option="option"
      @changeOption="changeOption"
    ></GaugeEdit>
  </div>
</template>

 <script>
import PieEdit from './pie/pieEdit'
import LineEdit from './line/lineEdit'
import BarEdit from './bar/barEdit'
import ScatterEdit from './scatter/scatterEdit'
import GaugeEdit from './gauge/gaugeEdit'

export default {
  props: ['option'],
  components: {
    PieEdit,
    LineEdit,
    BarEdit,
    ScatterEdit,
    GaugeEdit
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