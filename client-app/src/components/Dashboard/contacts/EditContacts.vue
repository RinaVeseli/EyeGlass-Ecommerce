<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Edit Contacts</h1>
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
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="material"
            label="Material"
            persistent-hint
            variant="solo"
            v-bind:error-messages="materialErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="price"
            label="Price"
            persistent-hint
            variant="solo"
            v-bind:error-messages="priceErrors"
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
          <v-select
            v-model="type"
            :items="[
              'Daily Disposables',
              '1-2 Week Disposables',
              'Monthly Disposables',
              'Toric',
              'Presbyopia',
              'Extended Wear',
            ]"
            label="Type of Contacts"
            persistent-hint
            variant="solo"
            v-bind:error-messages="colorErrors"
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
        <v-file-input
          type="file"
          ref="fileInput"
          label="File input"
          class="mt-8"
          @submit.prevent="uploadFile"
        ></v-file-input>
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
  name: 'EditContacts',
  data() {
    return {
      name: '',
      color: '',
      material: '',
      type: '',
      brand: '',
      brands: [],
      price: '',
      description: '',
      imageCover: null,
      images: null,
      nameErrors: [],
      colorErrors: [],
      materialErrors: [],
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
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/contacts/${this.$route.params._id}`
        );

        this.name = response.data.data.data.name;
        this.color = response.data.data.data.color;
        this.type = response.data.data.data.type;
        this.brand = response.data.data.data.brand;
        this.material = response.data.data.data.material;
        this.price = response.data.data.data.price;
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
      this.materialErrors = [];
      this.priceErrors = [];
      this.descriptionErrors = [];

      if (!this.name) {
        this.nameErrors.push('Name is required');
      }
      if (!this.color) {
        this.colorErrors.push('Color is required');
      }
      if (!this.material) {
        this.materialErrors.push('Material is required');
      }
      if (!this.price) {
        this.priceErrors.push('Price is required');
      }
      if (!this.description) {
        this.descriptionErrors.push('Description is required');
      }
      if (
        this.nameErrors.length ||
        this.colorErrors.length ||
        this.materialErrors.length ||
        this.priceErrors.length ||
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
        formData.append('type', this.type);
        formData.append('brand', this.brand);
        formData.append('material', this.material);
        formData.append('price', this.price);
        formData.append('description', this.description);
        await axios.patch(
          `http://localhost:3000/api/v1/contacts/${this.$route.params._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            name: this.name,
            type: this.type,
            brand: this.brand,
            color: this.color,
            material: this.material,
            price: this.price,
            description: this.description,
            imageCover: this.imageCover,
            images: this.images,
          }
        );

        this.name = '';
        this.color = '';
        this.material = '';
        this.price = '';
        this.description = '';
        this.imageCover = '';
        this.images = '';
        this.$router.push('/admin/dashboard/contacts/contacts-list');
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
