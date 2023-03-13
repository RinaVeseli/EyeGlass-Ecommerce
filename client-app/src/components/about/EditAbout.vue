<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Edit AboutPage</h1>
      </div>
      <v-row>
        <v-file-input
          type="file"
          ref="fileInput"
          @submit.prevent="uploadFile"
        ></v-file-input>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="about"
            label="Name"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Name is required']"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="team"
            label="Founded"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Founded is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="mission"
            label="Mission"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Mission is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="quote"
            label="quote"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Quote is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="directorDesk"
            label="directorDesk"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Director Desk is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="contact"
            label="contact"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Contact is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="vision"
            label="vision"
            persistent-hint
            variant="solo"
            :rules="[(v) => !!v || 'Vision is required']"
          ></v-text-field>
        </v-col> </v-row
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
  name: 'EditProduct',
  data() {
    return {
      file: null,
      about: '',
      team: '',
      mission: '',
      vision: '',
      quote: '',
      directorDesk: '',
      contact: '',
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
          `http://localhost:3000/api/v1/about/${this.$route.params._id}`
        );

        this.file = response.data.data.about.file[0];
        this.about = response.data.data.about.about;
        this.team = response.data.data.about.team;
        this.mission = response.data.data.about.mission;
        this.vision = response.data.data.about.vision;
        this.quote = response.data.data.about.quote;
        this.directorDesk = response.data.data.about.directorDesk;
        this.contact = response.data.data.about.contact;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        const formData = new FormData();
        formData.append('file', this.$refs.fileInput.files[0]);
        await axios.patch(
          `http://localhost:3000/api/v1/about/${this.$route.params._id}`,
          formData,
          {
            file: this.file,
            about: this.about,
            team: this.team,
            mission: this.mission,
            vision: this.vision,
            quote: this.quote,
            directorDesk: this.directorDesk,
            contact: this.contact,
            createdAt: Date.now(),
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        this.file = '';
        this.about = '';
        this.team = '';
        this.mission = '';
        this.vision = '';
        this.quote = '';
        this.directorDesk = '';
        this.contact = '';
        this.$router.push('/about-list');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
