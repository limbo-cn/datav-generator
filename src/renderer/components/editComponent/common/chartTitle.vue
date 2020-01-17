<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="文字：">
        <el-checkbox v-model="title.show">显示标题</el-checkbox>
        <el-form-item label="文本内容：">
          <el-input type="text" v-model="title.text"></el-input>
        </el-form-item>
        <el-form-item label="大小：">
          <el-input-number v-model="title.textStyle.fontSize" :min="8"></el-input-number>
        </el-form-item>
        <el-form-item label="颜色：">
          <el-color-picker v-model="title.textStyle.color"></el-color-picker>
        </el-form-item>
      </el-form-item>
      <el-form-item label="位置：">
        <el-form-item label="左右位置：">
          <el-radio-group v-model="title.left">
            <el-radio label="left">左对齐</el-radio>
            <el-radio label="center">居中</el-radio>
            <el-radio label="right">右对齐</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="距离上边：">
          <el-input-number v-model="title.top"></el-input-number>
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {

    }
  },
  watch: {
    title:
    {
      handler: function () {
        this.$emit('update:title', this.title)
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