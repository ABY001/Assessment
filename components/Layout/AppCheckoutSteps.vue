<template>
  <div>
    <a-layout-sider :style="{
      overflow: 'auto',
      maxWidth: '230px',
      width: '230px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      paddingTop: '1rem',
    }">
      <a-card class="steps">
        <a-timeline class="timeline">
          <a-timeline-item>
            <aone slot="dot" v-if="route === '/checkout/cart'" />
            <one slot="dot" v-else />
            <nuxt-link class="side_nav" to="/checkout/cart">
              <span :style="route === '/checkout/cart' ? 'font-weight: bold' : ''">
                Cart</span>
            </nuxt-link>
          </a-timeline-item>
          <a-timeline-item>
            <atwo slot="dot" v-if="route === '/checkout/delivery'" />
            <two slot="dot" v-else />
            <nuxt-link class="side_nav" to="/checkout/delivery">
              <span :style="route === '/checkout/delivery' ? 'font-weight: bold' : ''">
                Delivery Details</span>
            </nuxt-link>
          </a-timeline-item>
          <a-timeline-item>
            <athree slot="dot" v-if="route === '/checkout/payment'" />
            <three slot="dot" v-else />
            <nuxt-link class="side_nav" to="/checkout/payment">
              <span :style="route === '/checkout/payment' ? 'font-weight: bold' : ''">
                Payment</span>
            </nuxt-link>
          </a-timeline-item>
          <a-timeline-item>
            <afour slot="dot" v-if="route === '/checkout/complete'" />
            <four slot="dot" v-else />
            <nuxt-link class="side_nav" to="/checkout/complete">
              <span :style="route === '/checkout/complete' ? 'font-weight: bold' : ''">
                Order Complete
              </span>
            </nuxt-link>
          </a-timeline-item>
        </a-timeline>
      </a-card>
    </a-layout-sider>
  </div>
</template>

<script>
import one from "~/assets/icon/one.svg";
import two from "~/assets/icon/two.svg";
import three from "~/assets/icon/three.svg";
import four from "~/assets/icon/four.svg";
import aone from "~/assets/icon/aone.svg";
import atwo from "~/assets/icon/atwo.svg";
import athree from "~/assets/icon/athree.svg";
import afour from "~/assets/icon/afour.svg";
export default {
  components: {
    one,
    two,
    three,
    four,
    aone,
    atwo,
    athree,
    afour,
  },
  computed: {
    route() {
      return this.$route.path;
    },
  },
};
</script>

<style>
.timeline {
  margin: 5px 2px;
  /* padding-left: 35px; */
}

.ant-timeline-item {
  padding: 0 0 50px !important;
}

.ant-timeline-item-content {
  margin: 0 0 0 40px !important;
  font-weight: 500;
  font-size: 14px;
}

.steps {
  background: #ffffff;
  padding: 5px 3px;
  width: 95%;
  margin: 20px auto;
}
</style>