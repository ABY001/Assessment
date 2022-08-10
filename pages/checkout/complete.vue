<template>
  <div>
    <a-row type="flex" justify="center" class="title">
      Payment successful
    </a-row>
    <a-row style="margin: auto 35px">
      <a-card style="width: 500px; padding: 10px 30px; margin: auto">
        <a-row type="flex" justify="center">
          <img :src="success" />
        </a-row>
        <a-row type="flex" justify="center" style="font-weight: 500">
          Your order for<span style="color: #c42d32; font-weight: bold">
            &nbsp;"2 pieces of Swallow and Soups</span
          ><span style="font-weight: bold">
            &nbsp;to be delivered to&nbsp;</span
          >
          <span style="color: #c42d32; font-weight: bold">
            Irewolede Estate, Akure"&nbsp;</span
          >
          was successful
        </a-row>
        <a-row type="flex" justify="center" style="margin-top: 45px">
          <nuxt-link to="/">
            <a-button block type="primary" style="width: 200px; height: 45px">
              BACK TO MENU
            </a-button></nuxt-link
          >
        </a-row>
      </a-card>
    </a-row>
  </div>
</template>

<script>
import success from "~/assets/images/success.png";
export default {
  layout: "checkout",
  data() {
    return {
      success,
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 2rem;
  color: #c42d32;
  margin-bottom: 20px;
}
</style>