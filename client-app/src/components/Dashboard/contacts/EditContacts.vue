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
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="material"
            label="Material"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="price"
            label="Price"
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
          ></v-text-field> </v-col
        ><v-col cols="12" sm="6">
          <v-file-input
            type="file"
            ref="fileInput"
            label="File input"
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
      price: '',
      description: '',
      imageCover: '',
      images: '',
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
          `http://localhost:3000/api/v1/contacts/${this.$route.params._id}`
        );

        this.name = response.data.data.data.name;
        this.color = response.data.data.data.color;
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
      try {
        const formData = new FormData();
        formData.append('imageCover', this.$refs.fileInput.files[0]);

        // Loop through all files in file input and append them to formData as 'images'
        for (let i = 0; i < this.$refs.fileInput.files.length; i++) {
          formData.append('images', this.$refs.fileInput.files[i]);
        }
        formData.append('name', this.name);
        formData.append('color', this.color);
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
