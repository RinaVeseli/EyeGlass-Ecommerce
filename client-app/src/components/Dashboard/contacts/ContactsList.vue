<template>
  <router-view>
    <div class="flex-column">
      <div class="flex-column fill-height">
        <div class="d-flex style">
          <v-spacing><h1>Contacts List</h1></v-spacing>
          <v-btn variant="outlined" color="green" class="mr-4">
            <router-link
              class="text-black"
              :to="{ name: `AddContacts` }"
              color="white"
            >
              Add New
            </router-link>
          </v-btn>
        </div>
        <v-table
          fixed-header
          height="600px"
          class="ml-4 flex-grow-1 table-container"
        >
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Color</th>
              <th class="text-left">Material</th>
              <th class="text-left">Price</th>
              <th class="text-left">Description</th>
              <th class="text-left">Type Of Contacts</th>

              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <td>{{ item.name }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.material }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.type }}</td>

              <td>
                <v-btn
                  variant="flat"
                  class="mt-2 mr-4 text-white"
                  color="light-blue lighten-3"
                  prepend-icon="mdi-pencil"
                  ><router-link
                    class="text-black"
                    :to="{
                      name: `EditContacts`,
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

export default {
  name: 'ContactsList',
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
          'http://localhost:3000/api/v1/contacts'
        );

        this.items = response.data.data.data;
        console.log(response.data.data.data);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/contacts/${id} `
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
