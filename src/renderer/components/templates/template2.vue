<template>
  <div class="layout">
    <Box :hideTip="hideTip" :index="1" @drop="drop"></Box>
    <Box :hideTip="hideTip" :index="2" @drop="drop"></Box>
  </div>
</template>

 <script>
import Box from './basicBox'

export default {
  components: {
    'Box': Box
  },
  props: ['hideTip'],
  methods: {
    drop(e, index) {
      this.$emit('dropBox', e, index)
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  flex: 1;
}

.column_flex {
  flex-direction: column;
}
</style>