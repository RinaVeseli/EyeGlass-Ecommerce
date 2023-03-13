<template>
  <div>
    <label for="brand">Brand:</label>
    <select v-model="brand" id="brand">
      <option
        v-for="brand in brands"
        :key="brand._id"
        :value="brand._id"
      >
        {{ brand.name }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      brand: '',
      brands: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/v1/brands')
      .then((response) => {
        this.brands = response.data.data.brands;
        console.log(this.brands);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
