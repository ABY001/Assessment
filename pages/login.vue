<template>
  <div id="components-layout-demo-basic" style="height: 100vh">
    <a-layout style="height: 100%">
      <a-layout-content class="container">
        <!-- <a-row> -->
        <a-col :span="24" class="login-side">
          <a-row type="flex" justify="center">
            <h3 class="login-text">Login to your account</h3>
          </a-row>
          <a-row type="flex" justify="center">
            <h5 class="login-caption">Enter a world of super-duper dishes!</h5>
          </a-row>
          <a-row type="flex" justify="center">
            <a-form style="margin-top: 40px; width: 400px">
              <a-row dense class="ma-0">
                <a-input
                  size="large"
                  v-model="email"
                  placeholder="Enter your email"
                  type="email"
                  class="login__Input"
                  :rules="[(v) => !!v || 'Please enter your email']"
                >
                </a-input>
              </a-row>
              <a-row>
                <a-input-password
                  size="large"
                  v-model="password"
                  placeholder="Your Password"
                  class="login__Input"
                  :rules="[(v) => !!v || 'Please enter your password']"
                >
                </a-input-password>
              </a-row>
              <a-row type="flex" justify="end" class="admin">
                <!-- <span style="margin: 0 auto"> -->
                <a-button
                  type="link"
                  style="
                    color: rgba(0, 0, 0, 0.65);
                    margin-top: 10px;
                    padding-right: 0px;
                  "
                >
                  Forgot Password?
                </a-button>
                <!-- </span> -->
              </a-row>
              <a-row type="flex" justify="start">
                <a-button
                  :disabled="email === '' || password === ''"
                  :loading="loading"
                  large
                  block
                  class="login-btn"
                  @click="login()"
                >
                  <span
                    :style="{
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      fontSize: '17px',
                    }"
                  >
                    LOG IN</span
                  >
                </a-button>
              </a-row>
              <a-row type="flex" justify="space-around" class="admin">
                <span style="font-size: 13px">
                  New User?
                  <a-button
                    type="link"
                    style="color: #c42d32; padding: 5px 0px"
                  >
                    Sign Up
                  </a-button></span
                >
              </a-row>
            </a-form>
          </a-row>
        </a-col>
        <!-- </a-row> -->
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import html_logo from "~/assets/images/html_logo.png";
export default {
  layout: "auth",
  auth: false,
  data() {
    return {
      authForm: false,
      html_logo,
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions("cart", ["toggleLogIn"]),
    login() {
      this.loading = true;
      this.toggleLogIn(true);
      setTimeout(() => {
        this.loading = false;
        this.$notification.success({
          message: "Success",
          description: "You're now logged in",
        });
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* .login-background {
  background-image: url("/assets/img/htmlUnderground.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
} */
.ant-layout {
  background: transparent;
}
.container {
  /* margin: 20px auto 0 !important;
  position: relative; */
  display: flex;
  justify-content: center;
}
.login-side {
  margin-top: 4rem;
}
.login-text {
  font-weight: 600;
  font-size: 30px;
  color: #000000;
}
.forgot-password {
  width: 153px;
  height: 26px;
  font-weight: 300;
  font-size: 17px;
  color: #948c8c;
  /* margin: 116px; */
}
.register-btn {
  border: 3px solid rgba(255, 0, 0, 0.67);
  box-sizing: border-box;
  box-shadow: 0px 4px 24px -28px rgba(0, 0, 0, 0.25);
  border-radius: 39px;
  width: 96px;
  height: 30px;
}
.login-btn {
  background: #c42d32;
  border: 1px solid #dcd8d8;
  box-sizing: border-box;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  max-width: 385px;
  height: 40px;
  margin: 16px 0 33px;
}
.ant-btn:hover {
  text-decoration: none;
  background: rgba(194, 36, 41, 0.63137) !important;
}
.login__Input.ant-input {
  background: #ffffff !important;
  border: 1px solid #dcd8d8 !important;
  box-sizing: border-box !important;
  border-radius: 5px !important;
  max-width: 385px;
  margin-bottom: 30px;
}

/* input.ant-input {
  height: 60px !important;
} */
.login__Input.ant-input-password-large {
  background: #ffffff;
  border: 1px solid #dcd8d8;
  box-sizing: border-box;
  border-radius: 5px;
  max-width: 385px;
  /* height: 60px !important; */
}
/* input[type="password"] {
  height: 60px !important;
}
input[type="email"] {
  height: 60px !important;
} */
input:-internal-autofill-selected {
  background: #ffffff !important;
}
/* .ant-input {
  height: 60px;
} */
.ant-select-selection {
  /* height: 60px; */
  max-width: 385px;
  /* padding-bottom: 30px; */
}
/* .ant-select-dropdown.ant-select-dropdown--single.ant-select-dropdown-placement-bottomLeft {
  width: 100% !important;
} */
.ant-btn[disabled] {
  opacity: 0.3;
}
/* .ant-select-selection__rendered {
  line-height: 60px;
} */
.admin {
  max-width: 385px;
}
@media screen and (max-width: 767px) {
  div#components-layout-demo-basic {
    background-image: none !important;
  }
}
</style>
