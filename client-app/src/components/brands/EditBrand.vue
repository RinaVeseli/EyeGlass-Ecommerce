<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">founded</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="founded"
          v-model="founded"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">products</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="products"
          v-model="products"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">createdIn</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="createdIn"
          v-model="createdIn"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct">
        UPDATE
      </button>
    </div>
  </div>
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
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
