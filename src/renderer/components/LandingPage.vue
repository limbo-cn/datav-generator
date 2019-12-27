<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="title">visualization generator</h1>
      </el-header>
      <el-main>
        <div class="flex_wrapper">
          <div class="flex_item" @click="createNew">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div class="flex_item">
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <addNewDialog :dialogVisible.sync="showAddNewDialog"></addNewDialog>
  </div>
</template>

<script>
import addNewDialog from './createComponent/addNewDialog'

export default {
  name: 'landing-page',
  components: {
    'addNewDialog': addNewDialog
  },
  data() {
    return {
      showAddNewDialog: false
    }
  },
  methods: {
    createNew() {
      this.showAddNewDialog = true
    },
    updateDialogVisible(val) {
      this.showAddNewDialog = val
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}

.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
}

.flex_item {
  margin: 10px;
  height: 200px;
  width: 250px;
}

.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
}

.el-upload:hover {
  box-shadow: 8px 8px 8px 0 #aaa;
  border: 1px dashed #1989fa;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
}
</style>>

