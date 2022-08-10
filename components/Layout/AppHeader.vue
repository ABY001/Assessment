<template>
  <a-layout-header class="header" :style="{ background: 'white', padding: 0 }">
    <div class="logo">
      <a-row type="flex" justify="space-around" align="middle">
        <a-col :span="3">
          <NuxtLink style="text-decoration: none" to="/">
            <a-row type="flex" justify="center">
              <img :src="logo" height="70px" />
            </a-row>
          </NuxtLink>
        </a-col>

        <a-col :span="3">
          <a-button
            icon="environment"
            class="button-coloured"
            :style="{ color: '#c22429', fontWeight: '500' }"
          >
            <span style="margin-left: 15px"> Your location </span>
          </a-button>
        </a-col>
        <a-space />
        <a-col :span="10">
          <a-input
            class="coloured"
            v-model="search"
            placeholder="Search for your favourite meals"
          >
            <a-icon slot="prefix" type="search" />
          </a-input>
        </a-col>
        <a-space />
        <a-col :span="2">
          <nuxt-link to="/checkout/cart">
            <a-button
              icon="shopping-cart"
              class="button-coloured"
              :style="{ color: '#c22429', fontWeight: '500' }"
            >
              <span class="cart-number">
                {{ cartItemCount }}
              </span>
              <span style="margin-left: 15px"> Cart </span>
            </a-button>
          </nuxt-link>
        </a-col>

        <a-col :span="2">
          <nuxt-link to="/login">
            <a-button
              icon="user"
              class="button-coloured"
              :style="{ color: '#c22429', fontWeight: '500' }"
            >
              <span style="margin-left: 15px"> Log in</span>
            </a-button></nuxt-link
          >
        </a-col>
      </a-row>
    </div>
  </a-layout-header>
</template>

<script>
import { mapGetters } from "vuex";
import logo from "~/assets/images/random-logo.png";
export default {
  data() {
    return {
      logo,
      search: null,
      cart: 0,
    };
  },
  computed: {
    ...mapGetters("cart", ["cartItemCount"]),
  },
};
</script>

<style>
.button-coloured.ant-btn:focus {
  border: none;
  background: rgba(196, 45, 50, 0.1) !important;
  color: #c42d32 !important;
  width: 117px;
}

.button-coloured {
  background: rgba(196, 45, 50, 0.1);
  border-radius: 5px;
  height: 38px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
}
.coloured .ant-input {
  background: rgba(196, 45, 50, 0.1) !important;
  border-radius: 5px;
  border: none;
  height: 38px;
}
.cart-number {
  position: absolute;
  top: 4px;
  left: 30px;
  background: #c42d32;
  color: white;
  height: 15px;
  width: 15px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

/* .ant-input::placeholder {
  color: blue !important;
} */
</style>