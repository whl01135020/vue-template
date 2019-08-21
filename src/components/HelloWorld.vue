<template>
  <div class="login-demo">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <!-- 登录框 -->
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="70px">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录" name="login" @click="goLogin()">
              <el-form-item prop="username" label="用户名">
                <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="user.password" show-password placeholder="请输入密码">
                  <template slot="prepend"></template>
                </el-input>
              </el-form-item>
              <el-checkbox id="savePassword" checked="checked" @click="savePassword()">记住密码</el-checkbox>
              <!-- <router-link to="/forgetPassword">忘记密码</router-link> -->
              <br />
              <br />
              <el-form-item>
                <el-button type="primary" @click="doLogin()">登 录</el-button>
              </el-form-item>
            </el-tab-pane>
            <!-- 注册框 -->
            <el-tab-pane label="注册" name="register" @click="goRegister()">
              <el-form-item prop="username" label="用户名">
                <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <!-- <el-form-item prop="email" label="邮箱">
                <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>-->
              <el-form-item prop="password" label="设置密码">
                <el-input v-model="user.password" show-password placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" icon @click="doRegister()">注册账号</el-button>
              </el-form-item>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      activeName: "login",
      checked: false,
      user: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ message: "用户名不能为空", trigger: "blur" }],
        password: [{ message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    handleClick() {
      // console.log(tab, event);
    },
    // 登录
    doLogin() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.password) {
        this.$message.error("请输入密码！");
        return;
      } else {
        // this.$router.push({ path: "/welcome" });
        // 校验用户名和密码是否正确;
        axios
          .post("/submitLogin/", {
            // .post("/api/login/", {
            name: this.user.username,
            password: this.user.password
          })
          .then(res => {
            //  console.log("输出response.data", res.data);
            if (res.data.status === 200) {
              this.$router.push({ path: "/welcome" });
            } else {
              alert(res.data.msg);
            }
          });
      }
    },
    // 注册账号
    doRegister() {
      if (!this.user.username) {
        this.$message.error("请输入用户名！");
        return;
      } else if (!this.user.email) {
        this.$message.error("请输入邮箱！");
        return;
      } else if (this.user.email != null) {
        var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.user.email)) {
          this.$message.error("请输入有效的邮箱！");
        } else if (!this.user.password) {
          this.$message.error("请输入密码！");
          return;
        } else {
          axios
            .post("/submitRegister/", {
              name: this.user.username,
              email: this.user.email,
              password: this.user.password
            })
            .then(res => {
              // console.log("111输出response.data", res.data);
              if (res.data.status === 200) {
                this.activeName = "login";
              } else {
                alert(res.data.msg);
              }
            });
        }
      }
    }
  },
  // 记住密码
  savePassword() {
    if (document.getElementById("savePassword").checked) {
      var username = this.user.username;
      var password = this.user.password;
      window.sessionStorage.username = username;
      window.sessionStorage.password = password;
      localStorage.rmbPassword = true;
    } else {
      localStorage.rmbPassword = false;
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 公共样式 */
li {
  list-style: none;
  float: left;
}
.login-demo {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: url("../assets/images/bg2.png") no-repeat; */
  background-size: cover;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.login-wrap {
  /* background: url("../assets/images/login_bg.png") no-repeat; */
  width: 400px;
  height: 310px;
  margin: 175px auto;
  margin-left: 272px;
  border-radius: 6px;
  line-height: 20px;
  padding-top: 0px;
  border: 1px solid #ccc;
  position: relative;
  left: 50%;
  margin-left: -200px;
}
.el-tabs >>> .el-tabs__item {
  font-size: 18px;
  margin: 5px auto;
}
.el-tabs__nav {
  font-size: 18px;
}
a {
  text-decoration: none;
  color: #606266;
  font-size: 14px;
  float: right;
}
a:hover {
  color: coral;
}
.el-checkbox {
  text-indent: 4px;
}
>>> .el-checkbox__label {
  padding-left: 0px;
}
.el-button {
  width: 118%;
  margin-left: -40px;
  background-color: #409eff;
  letter-spacing: 5px;
  border: 0px;
}
</style>