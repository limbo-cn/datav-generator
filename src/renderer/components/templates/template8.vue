<template>
  <el-tooltip :disabled="hideTip" effect="dark" content="双击编辑组件" placement="top">
    <div class="box" :data-index="1" @dragover="dragOver" @drop.prevent="drop($event,1)">
      <span class="component_index">1</span>
    </div>
  </el-tooltip>
</template>

 <script>
export default {
  props: ['hideTip'],
  methods: {
    dragOver(e) {
      e.preventDefault()
    },
    drop(e, index) {
      this.$emit('dropBox', e, index)
    }
  }
}
</script>

<style scoped>
.component_index {
  margin: auto;
  font-size: 40px;
}

.layout {
  display: flex;
  width: 100%;
  flex: 1;
}

.box {
  background: rgba(199, 199, 199, 0.5);
  display: flex;
  flex: 1;
  margin: 1px;
}
</style>
