<template>
  <div>
    <a-row type="flex" justify="center" class="title"> Check Out </a-row>
    <span v-if="cartItems.length > 0">
      <a-row v-for="item in cartItems" :key="item.product._id" style="margin: auto 35px">
        <a-card>
          <a-row class="single-checkout">
            <a-col :span="3">
              <a-radio />
            </a-col>
            <a-col :span="14">
              <a-row class="meal_title" type="flex" justify="start">{{
                  item.product.name
              }}</a-row>
              <a-row class="meal_price" type="flex" justify="start">
                <span class="caption">Unit Pice: &nbsp; </span>
                <span class="price">&#8358;{{ formatPrice(item.product.price)
                }}</span>
              </a-row>
            </a-col>

            <a-col :span="6">
              <div style="display: flex; align-items: center">
                <plus @click="updateCount(item.product, item.quantity, true)" />
                <span style="font-weight: bold; font-size: 18px; margin: auto 10px">
                  {{ item.quantity }}
                </span>
                <minus @click="updateCount(item.product, item.quantity, false)" />
              </div>
            </a-col>

            <a-col :span="1">
              <deletes @click="deleteCount(item.product)" />
            </a-col>
          </a-row>
        </a-card>
      </a-row>
      <a-row type="flex" justify="end" style="margin-top: 25px; margin-right: 40px">
        <a-col>
          <a-row type="flex" justify="start" class="total_label">Total</a-row>
          <a-row type="flex" justify="start" class="total">&#8358;{{ cartTotalPrice ? formatTotal(cartTotalPrice) :
              0
          }}</a-row>
        </a-col>
      </a-row>
    </span>
    <a-row v-else> No items in your cart </a-row>
    <a-row type="flex" justify="center" style="margin-top: 45px">
      <a-button block type="" style="width: 200px; height: 45px; margin-right: 10px" @click="clearCart">
        CLEAR CART
      </a-button>
      <a-button block :loading="loading" type="primary" style="width: 200px; height: 45px" @click="payNow">
        PAY NOW
      </a-button>
    </a-row>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from "vuex";
import deletes from "~/assets/icon/deletes.svg";
import plus from "~/assets/icon/plus.svg";
import minus from "~/assets/icon/minus.svg";
export default {
  components: {
    plus,
    minus,
    deletes
  },
  data() {
    return {
      loading: false,
      rate: 0
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.storeCart;
    },
    ...mapGetters("cart", ["cartTotalPrice"]),
  },
  methods: {
    getCurrencyRate() {
      axios.get(process.env.RATE_URL + "?base=USD")
        .then((res) => {
          this.rate = res?.data.rates.NGN
        })
    },

    formatPrice(price) {
      if (!price) {
        return
      }
      price = price.substring(1);

      price = +price

      price = (this.rate * price).toFixed(2);

      price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

      return price
    },

    formatTotal(price) {
      if (!price) {
        return
      }

      price = (this.rate * price).toFixed(2);

      price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

      return price
    },

    ...mapActions("cart", ["updateCart", "clearCartItems", "removeProductFromCart"]),
    updateCount(product, quantity, ops) {
      let newCount, baseQuantity, count;
      baseQuantity = product.quantity;
      count = quantity / baseQuantity;

      if (ops) {
        newCount = count + 1;
      } else {
        if (count == 0) return
        newCount = count - 1;
      }
      let newQuantity = baseQuantity * newCount

      console.log(newQuantity, "::::::::::");
      this.updateCart({ product: product, quantity: newQuantity, count: newCount });
    },
    deleteCount(product) {
      this.removeProductFromCart(product)
    },
    clearCart() {
      this.clearCartItems()
    },
    payNow() {
      this.loading = true
      this.clearCartItems()
      this.$notification.success({
        message: "Success",
        description: "Cart has been cleared successfully",
      });
      setTimeout(() => {
        this.loading = false
        this.$router.push("/");
      }, 1000);
    }
  },

  mounted() {
    this.getCurrencyRate()
  }
};
</script>

<style scoped>
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

.caption {
  color: black;
  font-weight: bold;
  padding: 5px 0;
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
</style>