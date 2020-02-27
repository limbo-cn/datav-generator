<template>
  <el-tabs tab-position="left" style="height: 238px;">
    <el-tab-pane label="基本设置">
      <el-form :inline="true">
        <el-form-item label="图片源：">
          <el-radio-group v-model="optionData.type">
            <el-radio label="network">网络视频</el-radio>
            <el-radio disabled label="upload">上传视频</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-show="optionData.type === 'network'" label="网络地址：">
          <el-input style="width:500px" v-model="optionData.url" clearable></el-input>
        </el-form-item>
        <el-form-item v-show="optionData.type === 'upload'" label="上传：">
          <el-upload action="#" :show-file-list="false" :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="视频设置">
          <el-checkbox v-model="optionData.muted">静音</el-checkbox>
          <el-checkbox v-model="optionData.loop">循环</el-checkbox>
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
      optionData: Com.getDefaultOptionVideo(),
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
      let option = merge(Com.getDefaultOptionImage(), val)
      merge(this.optionData, option)
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(file)
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>