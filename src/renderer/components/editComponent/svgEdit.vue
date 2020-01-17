<template>
  <el-tabs tab-position="left" style="height: 238px;">
    <el-tab-pane label="基本设置">
      <el-form :inline="true">
        <el-form-item label="位置：">
          <el-form-item label="距离左边：">
            <el-input-number v-model="optionData.marginLeft"></el-input-number>
          </el-form-item>
          <el-form-item label="距离上边：">
            <el-input-number v-model="optionData.marginTop"></el-input-number>
          </el-form-item>
          <el-form-item label="大小：">
            <el-input-number
              v-model="optionData.zoom"
              :max="5"
              :min="0.5"
              :precision="2"
              :step="0.1"
            ></el-input-number>
          </el-form-item>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="开启特效">
          <el-checkbox v-model="optionData.rotate">旋转</el-checkbox>
          <el-checkbox v-model="optionData.heartbeat">心跳</el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="数据设置">
      <el-form>
        <el-form-item style="width:600px" label="数据源：">
          <el-input style="width:600px" type="textarea" :rows="6" v-model="optionData.svg"></el-input>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

 <script>
import merge from 'lodash/merge'
import Com from '../otherComponents/index.js'

export default {
  props: ['option'],
  data() {
    return {
      optionData: Com.getDefaultOptionSVG(),
      imageUrl: ''
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
    },
    option: function (val) {
      let option = merge(Com.getDefaultOptionSVG(), val)
      merge(this.optionData, option)
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