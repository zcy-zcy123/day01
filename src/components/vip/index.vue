<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/vip/vipList">
            <i class="el-icon-menu"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="/vip/vipGoods">
            <i class="el-icon-document"></i>
            <span slot="title">会员等级</span>
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