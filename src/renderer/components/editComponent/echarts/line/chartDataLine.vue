<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div>
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              v-for="(item, index) in data"
              :key="index"
              :label="item.name"
              :name="`${index}`"
            >
              <el-table
                :data="tableData"
                height="180"
                stripe
                style="width: 100%"
                @row-dblclick="editRow"
              >
                <el-table-column style="width: 50%" prop="name" label="横坐标">
                  <template slot-scope="scope">
                    <span>{{scope.row.xAxis}}</span>
                  </template>
                </el-table-column>
                <el-table-column style="width: 50%" prop="value" label="值">
                  <template slot-scope="scope">
                    <template v-if="scope.row === rowToEdit">
                      <el-input v-model.number="scope.row.value"></el-input>
                    </template>
                    <span v-else>{{scope.row.value}}</span>
                  </template>
                </el-table-column>
                <el-table-column width="250">
                  <template slot="header"></template>
                  <template slot-scope="scope" v-if="scope.row === rowToEdit">
                    <el-button size="mini" @click="handleEdit( scope.row)">确定</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-form ref="form" label-width="100px">
            <el-form-item label="数据设置">
              <IntervalApi :data.sync="userdata.intervalAPI"></IntervalApi>
            </el-form-item>
            <el-form-item label="线条名称">
              <el-input style="width:80%" v-model="data[+editableTabsValue].name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import IntervalApi from '../../common/intervalApi'
export default {
  props: ['data', 'xAxis', 'userdata'],
  components: {
    IntervalApi
  },
  mounted() {

  },
  data() {
    return {
      dialogAPIVisible: false,
      editableTabsValue: '0',
      rowToEdit: null
    }
  },
  computed: {
    tableData: function () {
      return this.xAxis.map((o, index) => { return { 'xAxis': o, 'value': this.data[+this.editableTabsValue].data[index] ? this.data[+this.editableTabsValue].data[index] : 0 } })
    }
  },
  watch: {
    data:
    {
      handler: function () {
        this.$emit('update:data', this.data)
      },
      deep: true
    },
    userdata:
    {
      handler: function () {
        this.$emit('update:userdata', this.userdata)
      },
      deep: true
    }
  },
  methods: {
    editRow(row) {
      this.rowToEdit = row
    },
    handleEdit(row) {
      this.rowToEdit = null
      this.data[+this.editableTabsValue].data = this.tableData.map(o => o.value)
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let tab = cloneDeep(this.data[0])
        tab.name = 'new line'
        this.data.push(tab)
        this.editableTabsValue = `${this.data.length - 1}`
      }
      if (action === 'remove') {
        this.editableTabsValue = '0'
        this.data.splice(+targetName, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 0.5em;
}
.el-form-item {
  margin-bottom: 10px;
}
</style>