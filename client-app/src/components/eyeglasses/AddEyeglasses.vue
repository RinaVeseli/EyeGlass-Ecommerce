<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Create new Eyeglasses</h1>
      </div>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Name"
            persistent-hint
            variant="solo"
            v-bind:error-messages="nameErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="color"
            :items="[
              'Beige',
              'Black',
              'Blue',
              'Brown',
              'Crystal',
              'Gold',
              'Grey',
              'Red',
              'Violet',
              'Yellow',
              'Multicolor',
            ]"
            label="Color"
            persistent-hint
            variant="solo"
            v-bind:error-messages="colorErrors"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="frameSize"
            label="FrameSize"
            persistent-hint
            variant="solo"
            v-bind:error-messages="sizeErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="ratingsAverage"
            label="RatingsAverage"
            persistent-hint
            variant="solo"
            v-bind:error-messages="ratingErrors"
          ></v-text-field>
        </v-col> </v-row
      ><v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="price"
            label="Price"
            persistent-hint
            variant="solo"
            v-bind:error-messages="priceErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="priceDiscount"
            label="PriceDiscount"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="shape"
            :items="[
              'Round',
              'Rectangle',
              'Square',
              'Oval',
              'Aviator',
            ]"
            label="Shape"
            persistent-hint
            variant="solo"
            v-bind:error-messages="typeErrors"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="type"
            :items="['EYEGLASSES', 'SUNGLASSES']"
            label="Type"
            persistent-hint
            variant="solo"
            v-bind:error-messages="typeErrors"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="description"
            label="Description"
            persistent-hint
            variant="solo"
            v-bind:error-messages="descriptionErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="gender"
            :items="['Men', 'Women', 'Unisex']"
            label="Gender"
            persistent-hint
            variant="solo"
            v-bind:error-messages="typeErrors"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <label for="brand">Choose the brand: </label>
          <select
            v-model="brand"
            id="brand"
            class="v-col-sm-12 v-col-12"
          >
            <option
              v-for="brand in brands"
              :key="brand._id"
              :value="brand._id"
            >
              {{ brand.name }}
            </option>
          </select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-file-input
            type="file"
            ref="fileInput"
            class="mt-5"
            @submit.prevent="uploadFile"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-file-input
        multiple
        ref="fileInput"
        label="File input"
        @submit.prevent="uploadFile"
      ></v-file-input>
      <v-btn color="white" class="mr-4"
        ><router-link
          class="text-black"
          :to="{ name: `dashboard` }"
          color="white"
        >
          Cancel
        </router-link></v-btn
      ><v-btn @click="saveProduct" color="light-blue lighten-3">
        Create
      </v-btn>
    </v-container>
  </v-form>
</template>
<script>
import axios from 'axios';

export default {
  name: 'AddEyeGlasses',
  data() {
    return {
      name: '',
      color: '',
      frameSize: '',
      ratingsAverage: '',
      price: '',
      priceDiscount: '',
      description: '',
      type: '',
      shape: '',
      brand: '',
      gender: '',
      brands: [],
      imageCover: null,
      images: null,
      nameErrors: [],
      colorErrors: [],
      sizeErrors: [],
      ratingErrors: [],
      priceErrors: [],
      descriptionErrors: [],
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
  methods: {
    async saveProduct() {
      if (!this.brand) {
        alert('Please select a brand');
        return;
      }
      this.nameErrors = [];
      this.colorErrors = [];
      this.sizeErrors = [];
      this.ratingErrors = [];
      this.priceErrors = [];
      this.descriptionErrors = [];
      if (!this.name) {
        this.nameErrors.push('Name is required');
      }
      if (!this.color) {
        this.colorErrors.push('Color is required');
      }
      if (!this.frameSize) {
        this.sizeErrors.push('FrameSize is required');
      }
      if (!this.price) {
        this.priceErrors.push('Price is required');
      }
      if (!this.ratingsAverage) {
        this.ratingErrors.push('Rating is required');
      }
      if (!this.description) {
        this.descriptionErrors.push('Description is required');
      }
      if (
        this.nameErrors.length ||
        this.colorErrors.length ||
        this.sizeErrors.length ||
        this.priceErrors.length ||
        this.ratingErrors.length ||
        this.descriptionErrors.length
      ) {
        return;
      }
      try {
        const formData = new FormData();
        formData.append('imageCover', this.$refs.fileInput.files[0]);

        for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
          formData.append('images', this.$refs.fileInput.files[i]);
        }

        formData.append('name', this.name);
        formData.append('color', this.color);
        formData.append('frameSize', this.frameSize);
        formData.append('type', this.type);
        formData.append('gender', this.gender);
        formData.append('shape', this.shape);
        formData.append('brand', this.brand);
        formData.append('ratingsAverage', this.ratingsAverage);
        formData.append('price', this.price);
        formData.append('priceDiscount', this.priceDiscount);
        formData.append('description', this.description);

        await axios.post(
          'http://localhost:3000/api/v1/eyeGlasses',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        this.name = '';
        this.color = '';
        this.frameSize = '';
        this.ratingsAverage = '';
        this.price = '';
        this.shape = '';
        this.gender = '';
        this.priceDiscount = '';
        this.description = '';
        this.imageCover = '';
        this.images = '';

        this.$router.push(
          '/admin/dashboard/eyeglasses/eyeglasses-list'
        );
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
#brand {
  border: solid rgb(191, 191, 191) 1px;
  border-radius: 5px;
  box-shadow: 1px 9px 300px -5px rgba(191, 189, 191, 1);
}
</style>
