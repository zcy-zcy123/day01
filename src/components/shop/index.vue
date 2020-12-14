<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/shop/shopList">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/shop/classList">
            <i class="el-icon-document"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/shop/shopGoods">
            <i class="el-icon-setting"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="/shop/shopType">
            <i class="el-icon-setting"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="/shop/shopNews">
            <i class="el-icon-setting"></i>
            <span slot="title">商品评论</span>
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