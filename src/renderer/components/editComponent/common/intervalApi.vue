<template>
  <div class="wrapper">
    <el-button size="mini" type="primary" @click="dialogAPIVisible = true">来自接口</el-button>
    <el-dialog title="数据接口" :visible.sync="dialogAPIVisible">
      <el-form>
        <el-form-item label="数据接口：">
          <el-input style="width:80%" type="text" v-model="data.url"></el-input>
        </el-form-item>
        <el-form-item label="获取数据间隔时间（秒）">
          <el-input-number v-model="data.interval" :min="10"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="data.use">从接口获取数据</el-checkbox>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogAPIVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      dialogAPIVisible: false
    }
  },
  watch: {
    data:
    {
      handler: function () {
        this.$emit('update:data', this.data)
      },
      deep: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline;
}
.el-form {
  margin-top: 0.5em;
}
.el-form-item {
  margin-bottom: 10px;
}
</style>