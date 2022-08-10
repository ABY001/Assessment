<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <app-header />
    <a-layout>
      <app-checkout-steps />
      <a-layout
        :style="{
          marginLeft: '230px',
          height: 'calc(100vh - 96px)',
          background: 'rgba(242, 242, 242, 0.8)',
        }"
      >
        <a-layout-content :style="{ overflow: 'initial', height: '100%' }">
          <div
            :style="{
              padding: '24px',
              textAlign: 'center',
            }"
          >
            <Nuxt />
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import AppBreadcrumb from "../components/Layout/AppBreadcrumb.vue";
import AppCheckoutSteps from "../components/Layout/AppCheckoutSteps.vue";
import AppHeader from "../components/Layout/AppHeader.vue";
export default {
  components: { AppHeader, AppBreadcrumb, AppCheckoutSteps },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    log() {
      return this.$store.state.cart.isLoggedIn;
    },
  },
  created() {
    this.routeCheck();
  },
  methods: {
    routeCheck() {
      if (!this.log) {
        setTimeout(() => {
          this.$notification.success({
            message: "Success",
            description: "You're not logged in",
          });
          this.$router.push("/login");
        }, 1000);
      }
    },
  },
};
</script>
<style>
/* #components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
} */

#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-input-affix-wrapper .ant-input-prefix {
  color: #c22429 !important;
}

.ant-layout-header {
  height: 96px !important;
}

.button-coloured {
  background: rgba(196, 45, 50, 0.1);
  border-radius: 5px;
  height: 38px;
  padding: 0 30px;
  margin: 0 auto;
}

.ant-layout {
  background: rgba(255, 255, 255, 0.8);
}

.ant-btn-primary {
  background-color: #c22429 !important;
  border-color: #c22429;
}

.ant-btn-primary:hover {
  background-color: #f8555a !important;
  color: white !important;
  border-color: #c22429;
}

.ant-btn:hover {
  background-color: rgba(255, 249, 249, 0.993) !important;
  color: #c22429 !important;
  border-color: #c22429;
}

.ant-radio-inner::after {
  background-color: #c42d32 !important;
}

.ant-radio-checked .ant-radio-inner {
  background-color: #c42d32 !important;
}
</style>
