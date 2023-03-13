<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Edit Eyeglasses</h1>
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
          <v-text-field
            v-model="color"
            label="Color"
            persistent-hint
            variant="solo"
            v-bind:error-messages="colorErrors"
          ></v-text-field>
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
        </v-col>
        <!-- <v-col cols="12" sm="6">
            <v-text-field
              v-model="ratingsQuantity"
              label="RatingsQuantity"
              persistent-hint
              variant="solo"
            ></v-text-field>
          </v-col>  --> </v-row
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
          <v-text-field
            v-model="description"
            label="Description"
            persistent-hint
            variant="solo"
            v-bind:error-messages="descriptionErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-file-input
            type="file"
            ref="fileInput"
            @submit.prevent="uploadFile"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-file-input
        multiple
        ref="fileInput"
        label="File input"
        @submit.prevent="uploadFile"
      ></v-file-input
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
  name: 'EditEyeglasses',
  data() {
    return {
      name: '',
      color: '',
      frameSize: '',
      ratingsAverage: '',
      //   ratingsQuantity: '',
      price: '',
      priceDiscount: '',
      description: '',
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
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/eyeGlasses/${this.$route.params._id}`
        );

        this.name = response.data.data.data.name;
        this.color = response.data.data.data.color;
        this.frameSize = response.data.data.data.frameSize;
        this.ratingsAverage = response.data.data.data.ratingsAverage;
        this.price = response.data.data.data.price;
        this.priceDiscount = response.data.data.data.priceDiscount;
        this.description = response.data.data.data.description;
        this.imageCover = response.data.data.data.imageCover[0];
        this.images = response.data.data.data.images[0];
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
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

        // Loop through all files in file input and append them to formData as 'images'
        for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
          formData.append('images', this.$refs.fileInput.files[i]);
        }
        formData.append('name', this.name);
        formData.append('color', this.color);
        formData.append('frameSize', this.frameSize);
        formData.append('ratingsAverage', this.ratingsAverage);
        formData.append('price', this.price);
        formData.append('priceDiscount', this.priceDiscount);
        formData.append('description', this.description);
        await axios.patch(
          `http://localhost:3000/api/v1/eyeGlasses/${this.$route.params._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            name: this.name,
            color: this.color,
            frameSize: this.frameSize,
            ratingsAverage: this.ratingsAverage,
            price: this.price,
            priceDiscount: this.priceDiscount,
            description: this.description,
            imageCover: this.imageCover,
            images: this.images,
          }
        );

        this.name = '';
        this.color = '';
        this.frameSize = '';
        this.ratingsAverage = '';
        this.price = '';
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
</style>
