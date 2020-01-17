<template>
  <div>
    <el-form :inline="true">
      <el-form-item label>
        <el-checkbox v-model="xAxis.show">显示横坐标</el-checkbox>
        <el-checkbox v-model="xAxis.inverse">反转</el-checkbox>
        <el-checkbox v-model="xAxis.boundaryGap">边界分格</el-checkbox>
      </el-form-item>
      <el-form-item label="名称：">
        <el-input type="text" v-model="xAxis.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['xAxis'],
  data() {
    return {

    }
  },
  watch: {
    xAxis:
    {
      handler: function () {
        this.$emit('update:xAxis', this.xAxis)
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