<template>
  <el-tooltip :disabled="hideTip" effect="dark" content="双击编辑组件" placement="top">
    <div class="box" :data-index="index" @dragover="dragOver" @drop.prevent="drop($event,index)">
      <span class="component_index">{{index}}</span>
    </div>
  </el-tooltip>
</template>

 <script>
export default {
  props: ['hideTip', 'index'],
  methods: {
    dragOver(e) {
      e.preventDefault()
    },
    drop(e, index) {
      this.$emit('drop', e, index)
    }
  }
}
</script>

<style scoped>
.box {
  background: rgba(199, 199, 199, 0.5);
  display: flex;
  flex: 1;
  margin: 1px;
}

.component_index {
  margin: auto;
  font-size: 40px;
}
</style>