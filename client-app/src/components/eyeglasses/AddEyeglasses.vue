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
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="color"
            label="Color"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="frameSize"
            label="FrameSize"
            hint="yyyy/mm/dd"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="ratingsAverage"
            label="RatingsAverage"
            persistent-hint
            variant="solo"
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
// import axios
import axios from 'axios';

export default {
  name: 'AddEyeGlasses',
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
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        const formData = new FormData();
        formData.append('imageCover', this.$refs.fileInput.files[0]);

        // Loop through all files in file input and append them to formData as 'images'
        for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
          formData.append('images', this.$refs.fileInput.files[i]);
        }

        // Append other form data properties
        formData.append('name', this.name);
        formData.append('color', this.color);
        formData.append('frameSize', this.frameSize);
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

        // Reset form data properties
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
