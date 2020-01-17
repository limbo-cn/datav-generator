<template>
  <div>
    <el-form :inline="true">
      <el-form-item label>
        <el-checkbox v-model="yAxis.show">显示纵坐标</el-checkbox>
        <el-checkbox v-model="yAxis.inverse">反转</el-checkbox>
        <el-checkbox v-model="yAxis.boundaryGap">边界分格</el-checkbox>
      </el-form-item>
      <el-form-item label="名称：">
        <el-input type="text" v-model="yAxis.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['yAxis'],
  data() {
    return {

    }
  },
  watch: {
    yAxis:
    {
      handler: function () {
        this.$emit('update:yAxis', this.yAxis)
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