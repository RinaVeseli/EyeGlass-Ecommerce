<template>
  <v-form>
    <v-container>
      <div class="title">
        <h1>Edit Brand</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Name"
            persistent-hint
            variant="solo"
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
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="createdIn"
            label="CreatedIn"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col> </v-row
      ><v-btn color="white" class="mr-4"
        ><router-link
          class="text-black"
          :to="{ name: `Dashboard` }"
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
  name: 'EditProduct',
  data() {
    return {
      name: '',
      slug: '',
      founded: '',
      products: [],
      createdIn: '',
      createdAt: '',
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
          `http://localhost:3000/api/v1/brands/${this.$route.params._id}`
        );

        this.name = response.data.data.brand.name;
        this.slug = response.data.data.brand.slug;
        this.founded = response.data.data.brand.founded;
        this.products = response.data.data.brand.products;
        this.createdIn = response.data.data.brand.createdIn;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.patch(
          `http://localhost:3000/api/v1/brands/${this.$route.params._id}`,
          {
            name: this.name,
            slug: this.name,
            founded: this.founded,
            products: this.products,
            createdIn: this.createdIn,
            createdAt: Date.now(),
          }
        );

        this.name = '';
        this.founded = '';
        this.products = '';
        this.createdIn = '';
        this.$router.push('/admin/dashboard/brand/brand-list');
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
