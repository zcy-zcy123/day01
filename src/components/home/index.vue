<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">后台管理</span>
          </el-menu-item>
          <el-menu-item index="/home/img">
            <i class="el-icon-document"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/home/shopList">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <Header />
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