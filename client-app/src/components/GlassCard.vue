<template>
  <div class="product-card">
    <img :src="product.photo" alt="Product Photo" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    },
  },
};
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
.product-card img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
}
.product-card h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.product-card p {
  font-size: 1rem;
  margin-bottom: 10px;
}
.product-card button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
.product-card button:hover {
  background-color: #0069d9;
}
</style>
