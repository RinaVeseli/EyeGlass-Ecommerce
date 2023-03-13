<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Create new Brand</h1>
      </div>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Name"
            required
            persistent-hint
            variant="solo"
            v-bind:error-messages="nameErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="founded"
            label="Founded"
            hint="yyyy/mm/dd"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="products"
            label="Products"
            required
            persistent-hint
            variant="solo"
            hint="glasses / lenses"
            v-bind:error-messages="productsErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="createdIn"
            label="CreatedIn"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn color="white" class="mr-4">
        <router-link
          class="text-black"
          :to="{ name: `dashboard` }"
          color="white"
        >
          Cancel
        </router-link>
      </v-btn>

      <v-btn @click="saveProduct" color="light-blue lighten-3">
        Create
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
// import axios
import axios from 'axios';

export default {
  name: 'AddBrand',
  data() {
    return {
      name: '',
      slug: '',
      founded: '',
      products: [],
      createdIn: '',
      nameErrors: [],
      productsErrors: [],
    };
  },
  methods: {
    async saveProduct() {
      this.nameErrors = [];

      this.productsErrors = [];

      if (!this.name) {
        this.nameErrors.push('Name is required');
      }

      if (this.products.length === 0) {
        this.productsErrors.push('Products is required');
      }
      if (this.nameErrors.length || this.productsErrors.length) {
        return;
      }

      try {
        await axios.post('http://localhost:3000/api/v1/brands', {
          name: this.name,
          slug: this.name,
          founded: this.founded,
          products: this.products,
          createdIn: this.createdIn,
          createdAt: Date.now(),
        });
        this.name = '';
        this.founded = '';
        this.products = [];
        this.createdIn = '';
        this.$router.push('/');
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
