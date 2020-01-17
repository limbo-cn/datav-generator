<template>
  <el-tabs tab-position="left" style="height: 238px;">
    <el-tab-pane label="基本设置">
      <el-form :inline="true">
        <el-form-item label="图片源：">
          <el-radio-group v-model="optionData.type">
            <el-radio label="network">网络图片</el-radio>
            <el-radio disabled label="upload">上传图片</el-radio>
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
        <el-form-item label="图片模式：">
          <el-radio-group v-model="optionData.fit">
            <el-radio label="fill">拉伸平铺</el-radio>
            <el-radio label="contain">保持比例</el-radio>
            <el-radio label="cover">高度锁定</el-radio>
            <el-radio label="scale-down">缩放</el-radio>
            <el-radio label="none">原图</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="开启特效">
          <el-checkbox v-model="optionData.rotate">旋转</el-checkbox>
          <el-checkbox v-model="optionData.heartbeat">心跳</el-checkbox>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="事件设置">
      <el-form></el-form>
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
      optionData: Com.getDefaultOptionImage(),
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