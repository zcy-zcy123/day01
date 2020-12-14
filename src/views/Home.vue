<template>
  <div>
    <el-container>
      <el-header>
        <h1>UNI-ADMIN</h1>
        <el-menu
          :default-active="path"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/shop">商品</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/vip">会员</el-menu-item>
          <el-menu-item index="/set">设置</el-menu-item>
          <el-submenu index="">
            <template slot="title">admin</template>
            <el-menu-item index="" @click="exit">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>
<script>
export default {
  computed: {
    path() {
      var arr = this.$route.path.split("/");
      return "/" + arr[1];
    },
  },
  methods: {
    exit() {
      localStorage.removeItem("token");
      localStorage.removeItem("time");
      this.$router.push("/login");
      this.$message("退出成功");
    },
  },
};
</script>
<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #545c64;
  color: #fff;
  /deep/ul {
    border: 0 !important;
  }
}
aside {
  height: 650px;
  border-right: 1px solid gainsboro;
  ul {
    border: 0;
  }
}
</style>