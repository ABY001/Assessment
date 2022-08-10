<template>
  <div>
    <a-row type="flex" justify="center" class="title"> Check Out </a-row>

    <a-row style="margin: auto 35px">
      <a-card style="delivery-card">
        <a-radio-group v-model="value" @change="onChange" class="payment-button">
          <a-radio :value="1">
            <a-row>
              <a-col :span="24">
                <a-card class="card-style">
                  <a-row type="flex" justify="start" class="payment-type">
                    Bank Transfer</a-row
                  >
                  <span v-if="bank">
                    <a-row type="flex" justify="start" class="payment-caption">
                      You will be making a bank transfer to the displayed bank
                      account details set below:
                    </a-row>
                    <a-row type="flex" justify="start" class="payment-label"
                      ><span> Account number :</span>
                      <span class="acct_no">0935049381</span>
                    </a-row>
                    <a-row type="flex" justify="start" class="payment-label"
                      >Account Name :
                      <span class="acct_no">MICMAKIN</span>
                    </a-row>
                    <a-row type="flex" justify="start" class="payment-label"
                      >Bank Name :
                      <span class="acct_no">WEMA</span>
                    </a-row></span
                  >
                </a-card></a-col
              ></a-row
            >
          </a-radio>

          <a-radio :value="2">
            <a-row
              ><a-col :span="24">
                <a-card class="card-style">
                  <a-row type="flex" justify="start" class="payment-type">
                    Credit Card</a-row
                  >
                </a-card>
              </a-col></a-row
            >
          </a-radio>

          <a-row v-if="card" style="width: 90%; margin: auto">
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
                <a-form-item label="Card Number">
                  <a-input
                    size="large"
                    placeholder="Enter your card number"
                    v-model="cardnumber"
                    :rules="[(v) => !!v || 'Please enter your cardnumber']"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row type="flex" justify="space-between">
              <a-col :span="11">
                <a-form-item label="Expiry Date">
                  <a-input
                    size="large"
                    placeholder="Enter your expiry date"
                    v-model="expDate"
                    :rules="[(v) => !!v || 'Please enter your expiry date']"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="11">
                <a-form-item label="CVV">
                  <a-input
                    size="large"
                    placeholder="Enter your cvv"
                    v-model="cvv"
                    :rules="[(v) => !!v || 'Please enter your cvv']"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-row>
        </a-radio-group>
      </a-card>
    </a-row>
    <a-row type="flex" justify="center" style="margin-top: 45px">
      <nuxt-link to="/checkout/complete">
        <a-button block type="primary" style="width: 200px; height: 45px">
          MAKE PAYMENT
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
      expDate: "",
      cvv: "",
      bank: false,
      card: false,
      value: null,
    };
  },
  methods: {
    onChange() {
      if (this.value === 1) {
        this.card = false;
        this.bank = true;
      } else if (this.value === 2) {
        this.bank = false;
        this.card = true;
      } else {
        this.bank = false;
        this.card = false;
      }
    },
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

.card-style {
  background: transparent;
  border: none;
  width: 100%;
}

.payment-button.ant-radio-group {
  display: flex;
  flex-direction: column;
}

.payment-button .ant-radio-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  background: rgba(196, 45, 50, 0.05);
  border-radius: 5px;
  margin: 20px auto;
  width: 90%;
}

.payment-type {
  font-weight: bold;
  font-size: 17px;
  color: #c42d32;
  margin-bottom: 4px;
}

.payment-caption {
  font-size: 10px;
  margin-bottom: 10px;
}

.payment-label {
  font-size: 8px;
  align-items: center;
  display: grid;
  gap: 32px;
  grid-template-columns: 50px 1fr;
  margin-bottom: 4px;
}

.acct_no {
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
}
</style>