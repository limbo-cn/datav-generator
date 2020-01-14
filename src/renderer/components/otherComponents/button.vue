<template>
  <div
    :style="{
       'text-align':optionData.textAlign,
       'margin-left':`${optionData.marginLeft}px`,
       'margin-top':`${optionData.marginTop}px`,
    }"
  >
    <el-button
      :loading="loading"
      :size="optionData.size"
      @click="onClick"
      type="primary"
    >{{optionData.text}}</el-button>
  </div>
</template>

 <script>
import Com from '../otherComponents/index.js'
import merge from 'lodash/merge'

export default {
  props: ['option', 'events'],
  data() {
    return {
      optionData: Com.getDefaultOptionButton(),
      loading: false
    }
  },
  computed: {
    eventList: function () {
      return this.$store.getters['local/events']
    }
  },
  mounted() {
    merge(this.optionData, this.option)
  },
  watch: {
    option: {
      handler: function () {
        merge(this.optionData, this.option)
      },
      deep: true
    }
  },
  methods: {
    onClick() {
      for (const event of this.events) {
        const e = this.eventList.find(o => o.id === event.eventId)
        if (e) {
          this.dealEvent(e)
        }
      }
    },
    dealEvent(event) {
      const _this = this
      _this.loading = true
      this.$http.get(event.api).then(response => {
        console.log(response)
        _this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>