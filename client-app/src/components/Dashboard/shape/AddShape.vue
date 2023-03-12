<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Create new Shape</h1>
      </div>

      <v-row>
        <v-col cols="12" sm="5">
          <v-text-field
            v-model="shape"
            label="Shape"
            persistent-hint
            variant="solo"
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
  name: 'CreateShape',
  data() {
    return {
      shape: '',
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post('http://localhost:3000/api/v1/shape', {
          shape: this.shape,
        });
        this.shape = '';

        this.$router.push('/admin/dashboard/shapes');
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
