<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/order">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/order/type">
            <i class="el-icon-document"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/order/shopping">
            <i class="el-icon-setting"></i>
            <span slot="title">售后服务</span>
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