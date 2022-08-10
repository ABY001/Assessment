<template>
  <div>
    <a-row type="flex" justify="center" class="title"> Check Out </a-row>

    <a-row style="margin: auto 35px">
      <a-card>
        <a-row type="flex" justify="space-between">
          <a-col :span="11">
            <a-form-item label="Name">
              <a-input
                size="large"
                placeholder="Enter your name"
                v-model="name"
                :rules="[(v) => !!v || 'Please enter your name']"
              />
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item label="Phone Number">
              <a-input
                size="large"
                placeholder="Enter your phone number"
                v-model="phonenumber"
                :rules="[(v) => !!v || 'Please enter your phonenumber']"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row class="single-checkout">
          <a-col :span="24">
            <a-form-item label="Delivery Address">
              <a-input
                size="large"
                placeholder="Enter your delivery address"
                v-model="address"
                :rules="[(v) => !!v || 'Please enter your name']"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
    </a-row>
    <a-row type="flex" justify="center" style="margin-top: 45px">
      <nuxt-link to="/checkout/payment">
        <a-button block type="primary" style="width: 200px; height: 45px">
          CONTINUE
        </a-button></nuxt-link
      >
    </a-row>
  </div>
</template>

<script>
export default {
  layout: "checkout",

  data() {
    return {
      name: "",
      phonenumber: "",
      address: "",
    };
  },
};
</script>

<style>
.title {
  font-weight: 600;
  font-size: 2rem;
  color: #c42d32;
  margin-bottom: 20px;
}

.price {
  background: rgba(196, 45, 50, 0.2);
  border-radius: 5px;
  color: #c42d32;
  font-weight: bold;
  padding: 5px 10px;
  margin-right: 15px;
}

.preprice {
  color: #c42d32;
}

.meal_price {
  margin: 15px auto;
}

.meal_title {
  font-weight: 500;
  font-size: 21px;
  margin: 15px auto;
}

.single-checkout {
  display: flex;
  align-items: center;
}

.total_label {
  font-weight: 600;
  font-size: 12px;
}

.total {
  font-weight: 600;
  font-size: 30px;
  color: #c42d32;
}

.ant-form-item-label {
  display: flex;
  text-align: left;
}
</style>