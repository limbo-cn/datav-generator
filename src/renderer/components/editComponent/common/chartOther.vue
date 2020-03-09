<template>
  <div>
    <el-form :inline="true" v-if="hasGrid">
      <el-form-item label="图表位置（百分比）：">
        <el-form-item label="距离上边：">
          <el-input-number v-model="option.grid.top"></el-input-number>
        </el-form-item>
        <el-form-item label="距离右边：">
          <el-input-number v-model="option.grid.right"></el-input-number>
        </el-form-item>
        <el-form-item label="距离下边：">
          <el-input-number v-model="option.grid.left"></el-input-number>
        </el-form-item>
        <el-form-item label="距离左边：">
          <el-input-number v-model="option.grid.bottom"></el-input-number>
        </el-form-item>
      </el-form-item>
    </el-form>
    <el-form :inline="true">
      <el-form-item label="工具：">
        <el-checkbox v-model="option.legend.show">显示图例操作区</el-checkbox>
        <el-checkbox v-model="option.tooltip.show">显示文字提示</el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['option', 'hasGrid'],
  data() {
    return {

    }
  },
  watch: {
    option:
    {
      handler: function () {
        this.$emit('update:option', this.option)
      },
      deep: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 0.5em;
}
.el-form-item {
  margin-bottom: 0;
}
</style>