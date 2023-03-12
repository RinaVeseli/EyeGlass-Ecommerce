<template>
  <v-form>
    <v-container>
      <div class="title">
        <h1>Edit OrderStep</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="number"
            label="Number"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="header"
            label="Header"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="description"
            label="Description"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col> </v-row
      ><v-btn color="white" class="mr-4"
        ><router-link
          class="text-black"
          :to="{ name: `dashboard` }"
          color="white"
        >
          Cancel
        </router-link></v-btn
      ><v-btn @click="updateProduct" color="light-blue lighten-3">
        Update
      </v-btn>
    </v-container>
  </v-form>
</template>
<script>
// import axios
import axios from 'axios';

export default {
  name: 'EditOrderStep',
  data() {
    return {
      number: '',
      header: '',
      description: '',
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/orderSteps/${this.$route.params._id}`
        );

        this.number = response.data.data.data.number;
        this.header = response.data.data.data.header;
        this.description = response.data.data.data.description;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.patch(
          `http://localhost:3000/api/v1/orderSteps/${this.$route.params._id}`,
          {
            number: this.number,
            header: this.header,
            description: this.description,
            createdAt: Date.now(),
          }
        );

        this.number = '';
        this.header = '';
        this.description = '';
        this.$router.push('/admin/dashboard/orderSteps');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
.title h1 {
  font-size: 33px;
  font-weight: 500;
}
.title {
  margin-bottom: 20px;
}

.v-container {
  padding: 60px;
  width: 80%;
  float: center;
  justify-content: space-between;
}
</style>
