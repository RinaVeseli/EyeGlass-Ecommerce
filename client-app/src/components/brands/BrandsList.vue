<template>
  <router-view>
    <div
      class="d-flex justify-space-around align-center flex-column fill-height"
    >
      <v-spacing>List of Brands</v-spacing>
      <div class="d-flex">
        <v-btn
          variant="outlined"
          color="green"
          class="mr-4 d-flex justify-flex-end float-right"
          ><router-link
            class="text-black"
            :to="{ name: `Create` }"
            color="white"
          >
            Add New
          </router-link></v-btn
        >
      </div>
      <v-table fixed-header height="600px">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Products</th>
            <th class="text-left">Founded</th>
            <th class="text-left">Origin</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item._id">
            <td>{{ item.name }}</td>
            <td>{{ item.products[0] }}</td>
            <td>{{ item.founded }}</td>
            <td>{{ item.createdIn }}</td>
            <td>
              <v-btn
                variant="flat"
                class="mt-2 mr-4 text-white"
                color="light-blue lighten-3"
                prepend-icon="mdi-pencil"
                ><router-link
                  class="text-black"
                  :to="{ name: `Edit`, params: { _id: item._id } }"
                  >Edit
                </router-link></v-btn
              >
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
    </div></router-view
  >
</template>
<script>
import axios from 'axios';

export default {
  name: 'BrandsList',
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
          'http://localhost:3000/api/v1/brands'
        );

        this.items = response.data.data.brands;
        console.log(response.data.data.brands);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/brands/${id} `
        );

        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
