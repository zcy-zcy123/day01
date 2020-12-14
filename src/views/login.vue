<template>
  <div id="container">
    <h1>UNI-ADMIN</h1>
    <el-form :model="login" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="login.name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="login.pass" type='password' placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width: 100%"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        name: "",
        pass: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.login.name,
          password: this.login.pass,
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg == "ok") {
            this.$message("登录成功");
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("time", new Date().getTime() + 1000 * 60 * 60);
            this.$router.push("/index");
          }
        })
        .catch(() => {
          this.$message("登录失败");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#container {
  width: 400px;
  padding: 20px 30px;
  margin: 100px auto;
  border: 1px solid gainsboro;
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 0;
  }
}
</style>