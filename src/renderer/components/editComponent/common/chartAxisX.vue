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
    <el-form :inline="true" v-if="xAxis.data">
      <el-form-item label="横坐标数据：">
        <el-tag :key="tag" v-for="tag in xAxis.data" hit closable @close="handleDelete(tag)">{{tag}}</el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['xAxis', 'series'],
  data() {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  watch: {
    xAxis:
    {
      handler: function () {
        this.$emit('update:xAxis', this.xAxis)
      },
      deep: true
    },
    series:
    {
      handler: function () {
        this.$emit('update:series', this.series)
      },
      deep: true
    }
  },
  methods: {
    handleDelete(tag) {
      const index = this.xAxis.data.findIndex(o => o === tag)
      this.xAxis.data.splice(index, 1)
      this.series.forEach(o => {
        o.data.splice(index, 1)
      })
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.xAxis.data.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
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

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>