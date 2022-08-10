<template>
  <div>
    <a-row type="flex" justify="center" style="margin: 10px auto">
      <a-col :lg="{ span: 18 }" :xs="{ span: 24 }">
        <a-row type="flex" justify="space-between">
          <a-col v-for="day in days" :key="day.id">
            <a-tag class="button-coloured" :style="{ color: '#c22429', fontWeight: '500' }">
              {{ day.name }}
            </a-tag>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row type="flex" style="margin-bottom: 1rem">
      <a-col :lg="{ span: 24 }" :xs="{ span: 24 }">
        <div class="title-head">Today’s menu</div>
      </a-col>
    </a-row>

    <a-row type="flex" justify="space-between" v-if="products.length >= 1">
      <a-col :lg="{ span: 8 }" :sm="{ span: 22 }" :xs="{ span: 24 }" v-for="(product, index) in products" :key="index">
        <a-card :bordered="false" class="card-major" @click="setProductDetails(product)">
          <a-row>
            <a-col :span="24">
              <div class="meal_card">
                <img :src="product.image" alt="Meal Image" width="100%" style="border-radius: 12px 12px 0px 0px" />
                <div class="discount">{{ product.discount }}</div>
              </div>
            </a-col>

            <a-col :span="24" style="margin: auto 15px">
              <a-row class="meal__title" type="flex" justify="start">
                {{ product.name }}
              </a-row>
              <a-row type="flex" justify="start">
                <span class="ratings">
                  <a-icon type="star" theme="filled" :style="{ color: '#FFC107', margin: '2px' }" />
                  {{ product.rating }}
                </span>
              </a-row>
              <a-row class="" type="flex" justify="start">
                <span class="price">&#8358;{{ numberWithCommas(product.price) }}</span>
                <span class="preprice">
                  <s>{{ numberWithCommas(product.preprice) }}</s>
                </span>
              </a-row>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-col :lg="{ span: 24 }" :sm="{ span: 24 }" :xs="{ span: 24 }">
        <a-card :bordered="false" class="card-major">
          <a-row type="flex" justify="center">
            No Available Product</a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-modal v-model="modalVisible" centered width="500px" @ok="() => (modalVisible = false)" :footer="null"
      class="card-modal">
      <a-row>
        <a-col :span="24">
          <div class="modal-title">{{ modalProduct.name }}</div>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <div class="meal_card">
            <img :src="modalProduct.image" alt="Meal Image" width="100%" style="border-radius: 12px 12px 0px 0px" />
            <div class="discount">{{ modalProduct.discount }}</div>
          </div>
        </a-col>

        <a-col :span="24" style="">
          <a-row type="flex" justify="space-between" style="margin: 13px 0">
            <span class="ratings" style="font-size: 16px">
              <a-icon type="star" theme="filled" :style="{ color: '#FFC107', marginRight: '2px' }" />
              {{ modalProduct.rating }}
            </span>
            <div style="display: flex; align-items: center">
              <plus @click="count++" style="cursor: pointer" />
              <span style="font-weight: bold; font-size: 18px; margin: auto 10px">
                {{ count }}
              </span>
              <minus @click="count--" style="cursor: pointer" />
            </div>
          </a-row>
          <a-row class="meal_price" type="flex" justify="start">
            <span class="price">&#8358;{{ numberWithCommas(modalProduct.price) }}</span>
          </a-row>
          <a-row class="meal_actions" type="flex" justify="space-between">
            <a-col :span="11">
              <a-button block style="color: #c42d32; border-color: #c42d32" @click="addToCart(modalProduct)">
                ADD TO CART
              </a-button>
            </a-col>
            <a-col :span="11">
              <nuxt-link to="/checkout/cart">
                <a-button block type="primary"> CHECKOUT </a-button>
              </nuxt-link>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LogoLicious from "~/assets/images/LogoLicious.png";
import meal1 from "~/assets/images/meal-1.jpg";
import meal2 from "~/assets/images/meal-2.jpg";
import meal3 from "~/assets/images/meal-3.jpg";
import meal4 from "~/assets/images/meal-4.jpg";
import meal5 from "~/assets/images/meal-5.jpg";
import meal0 from "~/assets/images/meal-6.jpg";
import plus from "~/assets/icon/plus.svg";
import minus from "~/assets/icon/minus.svg";
export default {
  components: {
    plus,
    minus,
  },
  data() {
    return {
      meal1,
      meal2,
      meal3,
      meal4,
      meal5,
      meal0,
      modalProduct: {},
      modalVisible: false,
      count: 1,
      LogoLicious,
      days: [
        {
          id: "1",
          name: "Monday",
        },
        {
          id: "2",
          name: "Tuesday",
        },
        {
          id: "3",
          name: "Wednesday",
        },
        {
          id: "4",
          name: "Thursday",
        },
        {
          id: "5",
          name: "Friday",
        },
        {
          id: "6",
          name: "Saturday",
        },
      ],
      products: [
        {
          _id: 1,
          image: meal0,
          name: "CITIZENS MEAL",
          rating: "4.5",
          price: 1500,
          preprice: 2000,
          discount: "-4%",
        },
        {
          _id: 2,
          image: meal1,
          name: "1/4 ROTISSERIE MEAL",
          rating: "4.5",
          price: 1500,
          preprice: 2300,
          discount: "-5%",
        },
        {
          _id: 3,
          image: meal2,
          name: "BIGBOYZ MEAL",
          rating: "4.5",
          price: 1200,
          preprice: 1900,
          discount: "-8%",
        },
        {
          _id: 4,
          image: meal3,
          name: "REFUEL MAX",
          rating: "4.7",
          price: 700,
          preprice: 1000,
          discount: "-10%",
        },
        {
          _id: 5,
          image: meal4,
          name: "REFUEL MEAL",
          rating: "4.9",
          price: 1250,
          preprice: 1500,
          discount: "-13%",
        },
        {
          _id: 6,
          image: meal5,
          name: "REFUEL MEAL (SPAGHETTI)",
          rating: "4.5",
          price: 1700,
          preprice: 2000,
          discount: "-13%",
        },
      ],
    };
  },
  methods: {
    numberWithCommas(x) {
      if (!x) {
        return;
      }
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    setProductDetails(product) {
      this.modalProduct = product;
      this.modalVisible = true;
      this.count = 1
    },
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("cart", ["removeProductFromCart"]),
    removeFromCart(product) {
      this.removeProductFromCart(product);
      this.$notification.success({
        message: "Success",
        description: "Product successfully removed from cart",
      });
    },
    addToCart(product) {
      if (this.count == 0) return
      this.addProductToCart({
        product: product,
        quantity: this.count,
        name: product.name,
        price: product.price,
        preprice: product.preprice,
      });
      this.$notification.success({
        message: "Success",
        description: "Product successfully added to cart",
      });
    },
  },
};
</script>

<style>
.title-head {
  color: #c22429;
  font-weight: 600;
  font-size: 30px;
  display: flex;
  float: left;
  margin-top: 1.2rem;
  /* margin-bottom: -1rem; */
}

@media screen and (max-width: 992px) {
  .title-head {
    font-size: 1.75rem;
  }
}

@media screen and (max-width: 576px) {
  .title-head {
    font-size: 1.6rem;
  }
}

.meal__title {
  font-weight: 500;
  font-size: 18px;
  margin-top: 5px;
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

.ratings {
  font-weight: 600;
  font-size: 12px;
  margin: 7px 0;
}

.card-modal {
  /* border-radius: 12px 12px 0px 0px; */
  /* margin-bottom: 25px;
  margin-top: 25px;
  margin-right: 7px;
  margin-left: 7px;
  max-width: 300px; */
  position: relative;
}

.ant-btn-primary:hover {
  background-color: #d1080e !important;
  color: white !important;
  border-color: #c22429;
}

.card-major {
  bottom: 5.35%;
  background: #ffffff;
  /* box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.12); */
  border-radius: 12px 12px 0px 0px;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-right: 7px;
  margin-left: 7px;
  max-width: 390px;
  position: relative;
}

/* .card-major:hover {
  transition: all 1s ease-in-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #cccccc;
  background-color: white;
  cursor: pointer;
} */

.card-major:before {
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 1s ease-in-out;
}

.card-major:hover:before {
  transform: scale(2.15);
}

.card-major .discount,
.card-modal .discount {
  position: absolute;
  left: 2.86%;
  top: 3.68%;
  background: #ffffff;
  border-radius: 5px;
  font-weight: 600;
  font-size: 13px;
  color: #c42d32;
  padding: 3px 10px;
}

.card-major .ant-card-body {
  padding: 0;
  padding-bottom: 15px;
}

.modal-title {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
}

.meal_actions {
  margin-top: 20px;
}
</style>