<template>
  <router-view>
    <div class="flex-column">
      <div class="flex-column fill-height">
        <div class="d-flex style">
          <v-spacing><h1>Message from Customers</h1></v-spacing>
        </div>
        <v-table
          fixed-header
          height="600px"
          class="ml-4 flex-grow-1 table-container"
        >
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Number</th>
              <th class="text-left">Email</th>
              <th class="text-left">Enquiry</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <td>{{ item.name }}</td>
              <td>{{ item.number }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.enquiry }}</td>

              <td>
                <v-btn
                  class="mt-2"
                  color="red accent-2"
                  variant="flat"
                  prepend-icon="mdi-delete"
                  ><a
                    class="text-black"
                    @click="deleteProduct(item._id)"
                  >
                    Delete</a
                  ></v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </div></router-view
  >
</template>
<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/contact'
        );

        this.items = response.data.data.contacts;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/contact/${id} `
        );

        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
.table-container {
  float: right;
  width: 85%;
}
.style {
  padding: 60px;
  width: 80%;
  float: right;
  justify-content: space-between;
}
.style h1 {
  font-size: 32px;
}
</style>
