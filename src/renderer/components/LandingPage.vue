<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="title">dataV generator</h1>
      </el-header>
      <el-main>
        <div class="flex_wrapper">
          <div class="flex_item" @click="createNew">
            新建项目
            <div class="el-upload">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </div>
          </div>
          <div
            class="flex_item"
            @click="editProject(project.id)"
            @contextmenu.prevent="$refs.projectMenu.open($event,project.id)"
            v-for="project in projects"
            :key="project.id"
          >
            <el-image :src="project.image"></el-image>
            <div>{{project.name}}</div>
          </div>
        </div>
      </el-main>
    </el-container>
    <layout ref="addNew" :dialogVisible.sync="showLayout"></layout>
    <context-menu ref="projectMenu" @ctx-open="contextmenuProject">
      <li class="ctx-item" @click="useProject">使用</li>
      <li class="ctx-item" @click="editProject">编辑</li>
      <li class="ctx-item" @click="deleteProject">删除</li>
    </context-menu>
  </div>
</template>

<script>
import contextMenu from 'vue-context-menu'

import layout from './main/layout'

export default {
  name: 'landing-page',
  components: {
    layout,
    contextMenu
  },
  data() {
    return {
      showLayout: false,
      projectId: 0
    }
  },
  computed: {
    projects: function () {
      return this.$store.getters['local/projects']
    }
  },
  methods: {
    createNew() {
      this.showLayout = true
      this.$refs.addNew.returnToLayouts()
    },
    updateDialogVisible(val) {
      this.showLayout = val
    },
    contextmenuProject(id) {
      this.projectId = id
    },
    useProject() {
      const id = this.projectId
      let project = this.projects.find(o => o.id === id)
      this.$store.dispatch('common/setProject', project)
      if (!process.env.IS_WEB) {
        const { BrowserWindow } = require('electron').remote
        let win = new BrowserWindow({ frame: false, fullscreen: true })
        win.on('closed', () => {
          win = null
        })
        const winURL = process.env.NODE_ENV === 'development'
          ? `http://localhost:9080#showcase`
          : `file://${__dirname}/index.html#showcase`
        win.loadURL(winURL)
      }
    },
    editProject(id = this.projectId) {
      let project = this.projects.find(o => o.id === id)
      if (!project) {
        return
      }
      this.$store.dispatch('common/setProject', project)
      this.$router.push({ path: 'project' })
    },
    deleteProject() {
      const id = this.projectId
      this.$store.dispatch('local/removeProject', id)
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
  border: 1px dashed grey;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  height: 180px;
  width: 250px;
  cursor: pointer;
  text-align: center;
}

.flex_item:hover {
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

