<template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          required
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
      <button class="button is-success" @click="saveProduct">
        SAVE
      </button>
    </div>
  </div>
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
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
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
