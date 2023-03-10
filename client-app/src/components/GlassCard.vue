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
        <h3>Brand | {{ data.name }}</h3>

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
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.data);
    },
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
