<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/set">
            <i class="el-icon-menu"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/set/type">
            <i class="el-icon-document"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/set/admin">
            <i class="el-icon-setting"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
          <el-menu-item index="/set/money">
            <i class="el-icon-setting"></i>
            <span slot="title">交易设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <Header/>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "../../components/header";
export default {
  components: {
    Header,
  },
};
</script>