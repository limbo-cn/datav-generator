<template>
  <el-tabs tab-position="left" style="height: 238px;">
    <el-tab-pane label="基本设置">
      <el-form :inline="true">
        <el-form-item label="文字：">
          <el-form-item label="文本内容：">
            <el-input type="text" v-model="optionData.text"></el-input>
          </el-form-item>
          <el-form-item label="大小：">
            <el-input-number v-model="optionData.fontSize" :min="8"></el-input-number>
          </el-form-item>
          <el-form-item label="颜色：">
            <el-color-picker v-model="optionData.color"></el-color-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="位置：">
          <el-form-item label="左右位置：">
            <el-radio-group v-model="optionData.textAlign" @change="optionData.marginLeft = 0">
              <el-radio label="left">左对齐</el-radio>
              <el-radio label="right">右对齐</el-radio>
              <el-radio label="center">居中</el-radio>
              <el-radio label="initial">自定义</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-show="optionData.textAlign === 'initial'" label="距离左边：">
            <el-input-number v-model="optionData.marginLeft"></el-input-number>
          </el-form-item>
          <el-form-item label="距离上边：">
            <el-input-number v-model="optionData.marginTop"></el-input-number>
          </el-form-item>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="开启特效">
          <el-checkbox v-model="optionData.animate">文字滚动</el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="事件设置"></el-tab-pane>
  </el-tabs>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'

export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionText()
    }
  },
  mounted() {
    merge(this.optionData, this.option)
  },
  watch: {
    optionData:
    {
      handler: function () {
        this.$emit('changeOption', this.optionData)
      },
      deep: true
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
</style>