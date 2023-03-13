<template>
  <router-view></router-view>

  <div class="product-card">
    <router-link
      :to="{
        name: 'glasses-details',
        params: { _id: data._id },
      }"
    >
      <img
        :src="
          'http://localhost:3000/img/eyeglasses/' + data.imageCover
        "
        alt="Product Photo"
    /></router-link>
    <div class="info">
      <div class="nameFavo d-flex">
        <h3>{{ brand }} | {{ data.name }}</h3>

        <button @click="addToCart">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <router-link
        :to="{
          name: 'glasses-details',
          params: { _id: data._id },
        }"
      >
        <div class="priceFrame d-flex">
          <p>US ${{ data.price }}</p>
          <p>
            <i class="fa-solid fa-ruler-horizontal"></i>
            {{ data.frameSize }}
          </p>
        </div>
      </router-link>
      <button class="shopNow">Shop Now</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      brand: '',
    };
  },
  props: ['data'],
  methods: {
    async getBrandName(brandId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/brands/${brandId}`
        );
        this.brand = response.data.data.brand.name;
        console.log(this.brand);
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    await this.getBrandName(this.data.brand);
  },
};
</script>

<style>
.product-card {
  height: 450px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-card:hover {
  border-radius: 10px;
  box-shadow: -1px -1px 23px -5px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
}
.product-card img {
  width: 100%;
  max-width: 100%;
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
  color: black;
  /* border: none; */
  /* padding: 5px 10px; */
  cursor: pointer;
}
.shopNow {
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}
.nameFavo,
.priceFrame {
  padding: 0px 50px;
  justify-content: space-between;
}
.nameFavo {
  margin-top: 20px;
}
i {
  color: rgb(80, 80, 80);
  font-size: 22px;
  align-items: center;
  text-align: center;
}
.shopNow {
  margin-top: 50px;
  border: solid black 1px;
  color: black;
}
</style>
