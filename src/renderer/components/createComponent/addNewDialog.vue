<template>
  <el-dialog class="dialog" title="选择布局" :visible="dialogVisible" @close="closeDialog" width="80%">
    <div class="flex_wrapper">
      <div class="flex_item" @click="editLayout(1)">
        <template1 hideTip></template1>
      </div>
      <div class="flex_item" @click="editLayout(2)">
        <template2 hideTip></template2>
      </div>
      <div class="flex_item" @click="editLayout(3)">
        <template3 hideTip></template3>
      </div>
      <div class="flex_item" @click="editLayout(4)">
        <template4 hideTip></template4>
      </div>
      <div class="flex_item" @click="editLayout(5)">
        <template5 hideTip></template5>
      </div>
      <div class="flex_item" @click="editLayout(6)">
        <template6 hideTip></template6>
      </div>
      <div class="flex_item" @click="editLayout(7)">
        <template7 hideTip></template7>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import template1 from '../templates/template1'
import template2 from '../templates/template2'
import template3 from '../templates/template3'
import template4 from '../templates/template4'
import template5 from '../templates/template5'
import template6 from '../templates/template6'
import template7 from '../templates/template7'

export default {
  components: {
    'template1': template1,
    'template2': template2,
    'template3': template3,
    'template4': template4,
    'template5': template5,
    'template6': template6,
    'template7': template7
  },
  props: ['dialogVisible'],
  data() {
    return {

    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:dialogVisible', false)
    },
    editLayout(val) {
      this.$store.dispatch('common/setTemplateId', val)
      this.$router.push({ path: 'layout' })
    }
  }
}
</script>

<style  scoped>
.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  overflow: auto;
}

.flex_item {
  border: 1px dashed grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  height: 200px;
  width: 250px;
  cursor: pointer;
}

.flex_item:hover {
  box-shadow: 8px 8px 8px 0 #aaa;
  border: 1px dashed #1989fa;
}

.component_index {
  margin: auto;
  font-size: 40px;
}

.layout {
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
}

.box {
  background: rgba(199, 199, 199, 0.5);
  display: flex;
  flex: 1;
  margin: 1px;
}

.column_flex {
  flex-direction: column;
}
</style>