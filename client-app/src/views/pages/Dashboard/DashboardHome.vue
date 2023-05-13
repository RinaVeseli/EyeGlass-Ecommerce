<template>
  <div class="con">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="colsCard">
      <v-container class="Container">
        <v-row>
          <v-col sm="4" md="4">
            <v-card color="#1F7087" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    <i class="fa-solid fa-users"></i>
                    {{ numberOfUsers }}
                  </v-card-title>
                  <v-card-subtitle>User</v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      <a href="/admin/dashboard/users">
                        See All Users</a
                      >
                    </v-btn>
                  </v-card-actions>
                </div>
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://icons.veryicon.com/png/o/miscellaneous/905-system/customer-management-4.png"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col sm="5" md="4">
            <v-card color="#1F7087" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    {{ numberOfContacts }}
                  </v-card-title>
                  <v-card-subtitle>Contacts</v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      <a
                        href="/admin/dashboard/contacts/contacts-list"
                      >
                        See All Contacts</a
                      >
                    </v-btn>
                  </v-card-actions>
                </div>
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn-icons-png.flaticon.com/512/2789/2789428.png"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
          <v-col sm="4" md="4">
            <v-card color="#952175" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    <i class="fa-solid fa-glasses"></i>
                    {{ numberOfEyeglasses }}
                  </v-card-title>
                  <v-card-subtitle>EyeGlasses</v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      <a
                        href="/admin/dashboard/eyeglasses/eyeglasses-list"
                      >
                        See All EyeGlasses</a
                      >
                    </v-btn>
                  </v-card-actions>
                </div>
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn-icons-png.flaticon.com/512/4312/4312129.png"
                  >
                  </v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <p class="allOrders">All Orders</p>
        <div class="tableOrder">
          <EasyDataTable :headers="headers" :items="items" />
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import Sidebar from './Sidebar.vue';
// import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';
import EasyDataTable from 'vue3-easy-data-table';
import axios from 'axios';
export default defineComponent({
  name: 'recursive-menu',

  components: {
    Sidebar,
    EasyDataTable,
  },
  data() {
    return {
      items: [],
      cartItems: '',
      eyeglass: '',
      headers: [
        { text: 'User', value: 'user' },
        { text: 'Products', value: 'eyeglass', sortable: true },
        { text: 'TotalPrice', value: 'totalPrice', sortable: true },
      ],
    };
  },
  computed: {
    numberOfEyeglasses() {
      return this.$store.getters.numberOfEyeglasses;
    },
    numberOfContacts() {
      return this.$store.getters.numberOfContacts;
    },
    numberOfUsers() {
      return this.$store.getters.numberOfUsers;
    },
  },
  created() {
    this.$store.dispatch('fetchEyeglasses');
    this.$store.dispatch('fetchContacts');
    this.$store.dispatch('fetchUsers');
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/order/all'
        );
        const items = response.data.data.data;
        for (const item of items) {
          const eyeglassNames = [];
          for (const cartItemId of item.cartItems) {
            const eyeglassName = await this.getEyeglassesName(
              cartItemId
            );
            eyeglassNames.push(eyeglassName);
          }
          item.eyeglass = eyeglassNames.join(',');
        }
        this.items = items;
      } catch (err) {
        console.log(err);
      }
    },
    async getEyeglassesName(brandId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/eyeGlasses/${brandId}`
        );
        const eyeglassName = response.data.data.data.name;

        return eyeglassName;
      } catch (err) {
        console.log(err);
      }
    },

    async mounted() {
      await this.getBrandName(this.data.eyeglass);
    },
  },
});
</script>
<style>
.con {
  display: flex;
  justify-content: space-evenly;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.colsCard {
  width: 100%;
  float: center;

  margin-top: 50px;
}
.cardsContainer {
  gap: 40px;
}
.v-row {
  float: center;
}
.img {
  background: none;
}
@media only screen and (max-width: 768px) {
  .con {
    flex-direction: column;
  }
  .sidebar {
    order: 2;
  }
  .colsCard {
    order: 1;
    margin-top: 0;
  }
}
.v-btn a {
  color: white;
}
.allOrders {
  padding: 40px;
  font-size: 40px;
  font-weight: 500;
  color: #4daaf2;
}
.tableOrder {
  border: 1px solid #4daaf2;
}
</style>
