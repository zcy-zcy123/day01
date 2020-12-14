<template>
  <div>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      v-if="$route.path == '/home' ? true : false"
    >
      <el-breadcrumb-item>后台首页</el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb separator-class="el-icon-arrow-right" v-else>
      <el-breadcrumb-item :to="{ path: '/home' }">后台首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>