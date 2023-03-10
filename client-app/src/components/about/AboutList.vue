<template>
  <router-view>
    <div class="flex-column">
      <!-- <div class="mr-4">
      <Sidebar />
    </div> -->
      <div class="flex-column fill-height">
        <div class="d-flex style">
          <v-spacing><h1>ABOUT</h1></v-spacing>
          <!-- <v-btn variant="outlined" color="green" class="mr-4">
          <router-link
            class="text-black"
            :to="{ name: `Create` }"
            color="white"
          >
            Add New
          </router-link>
        </v-btn> -->
        </div>
        <v-table
          fixed-header
          height="600px"
          class="ml-4 flex-grow-1 table-container"
        >
          <thead>
            <tr>
              <th class="text-left">Photo</th>
              <th class="text-left">Name</th>
              <th class="text-left">Team</th>
              <th class="text-left">Mission</th>
              <th class="text-left">Vision</th>
              <th class="text-left">Quote</th>
              <th class="text-left">DirectorDesk</th>
              <th class="text-left">Contact</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <td>{{ item.file }}</td>
              <td>{{ item.about }}</td>
              <td>{{ item.team }}</td>
              <td>{{ item.mission }}</td>
              <td>{{ item.vision }}</td>
              <td>{{ item.quote }}</td>
              <td>{{ item.directorDesk }}</td>
              <td>{{ item.contact }}</td>
              <td>
                <v-btn
                  variant="flat"
                  class="mt-2 mr-4 text-white"
                  color="light-blue lighten-3"
                  prepend-icon="mdi-pencil"
                  ><router-link
                    class="text-black"
                    :to="{
                      name: `EditAbout`,
                      params: { _id: item._id },
                    }"
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
      </div>
    </div></router-view
  >
</template>
<script>
import axios from 'axios';
// import Sidebar from '../../views/pages/Dashboard/Sidebar.vue';
export default {
  name: 'AboutList',
  // components: {
  //   Sidebar,
  // },
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/about'
        );

        this.items = response.data.data.abouts;
        console.log(response.data.data.abouts);
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/about/${id} `
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
  width: 85%; /* adjust as needed */
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
