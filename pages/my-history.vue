
  <template>
  <div>
    <a-row type="flex" justify="center" class="title"> My Orders </a-row>
    <a-row style="margin: auto 35px">
      <a-card style="width: 500px; padding: 10px 30px; margin: auto">
        <a-table :columns="columns" :data-source="completedMealOrders" rowKey="_id">
          <template slot="img">
            <div key="col">
              <template>
                <div class="carrd">
                  <div class="logoli_meal">
                    <img :src="LogoLicious" alt="meal image" width="100%" style="border-radius: 10px" />
                  </div>
                </div>
              </template>
            </div>
          </template>

          <template slot="_id" slot-scope="text">
            <div key="col1">
              <template><span class="check"> check-out-id: </span><span class="check2">{{ text }}</span>
              </template>
            </div>
          </template>
          <template slot="totalCost" slot-scope="text">
            <div key="col2">
              <template>
                <span class="check2">{{ text }}</span>
              </template>
            </div>
          </template>
          <template slot="orderedDate" slot-scope="text">
            <div key="col3">
              <template>
                <span class="check2">{{ timeConvert(text) }}</span>
              </template>
            </div>
          </template>
          <template slot="paymentStatus" slot-scope="text">
            <div key="col4">
              <template>
                <span v-if="text == 'completed'" class="checked">{{
                    titleCase(text)
                }}</span>
                <span v-else class="unchecked">{{ titleCase(text) }}</span>
              </template>
            </div>
          </template>
          <template slot="deliveryStatus" slot-scope="text">
            <div key="col4">
              <template>
                <span v-if="text == 'completed'" class="checked">{{
                    titleCase(text)
                }}</span>
                <span v-else class="unchecked">{{ titleCase(text) }}</span>
              </template>
            </div>
          </template>
        </a-table>
      </a-card>
    </a-row>
  </div>
</template>
  
<script>
const columns = [
  {
    title: "",
    dataIndex: "img",
    key: "img",
    scopedSlots: { customRender: "img" },
  },
  {
    title: "Checkout Id",
    dataIndex: "_id",
    key: "_id",
    scopedSlots: { customRender: "_id" },
  },
  {
    title: "Price (N)",
    dataIndex: "totalCost",
    key: "totalCost",
    scopedSlots: { customRender: "totalCost" },
  },
  {
    title: "Date",
    dataIndex: "orderedDate",
    key: "orderedDate",
    scopedSlots: { customRender: "orderedDate" },
  },
  {
    title: "Delivery Status",
    dataIndex: "deliveryStatus",
    key: "deliveryStatus",
    scopedSlots: { customRender: "deliveryStatus" },
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
    key: "paymentStatus",
    scopedSlots: { customRender: "paymentStatus" },
  },
];
import LogoLicious from "~/assets/images/LogoLicious.png";
export default {
  layout: "history",
  async asyncData({ $axios, error, route, store }) {
    try {
      const data = await $axios.get(`/api/v1/user/${route.params.id}`, {
        headers: {
          "x-admin-token": store.state.admin.token,
        },
      });
      return {
        // singleUser: resp.data.payload,
        completedMealOrders: resp.data.payload.completedMealOrders,
      };
    } catch (e) {
      const { response } = e;
      if (response)
        error({ statusCode: response.status, message: response.statusText });
      else error({ statusCode: 500, message: e.message });
    }
  },
  data() {
    return {
      completedMealOrders: [],
      LogoLicious,
    };
  },
};
</script>
  
<style scoped>
.logoli_meal {
  height: 85px;
  width: 105px;
}

.check {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}

.check2 {
  font-style: normal;
  font-weight: normal;
  font-size: 17.5px;
}

.checked {
  font-style: normal;
  font-weight: normal;
  font-size: 17.5px;
  color: #22bc09;
}

.unchecked {
  font-style: normal;
  font-weight: normal;
  font-size: 17.5px;
  color: #ff0000;
}
</style>