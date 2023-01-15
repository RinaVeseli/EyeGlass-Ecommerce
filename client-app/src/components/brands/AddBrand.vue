<!-- <template>
  <div>
    <div class="field">
      <label class="label">Product Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          required
          placeholder="Product Name"
          v-model="name"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">founded</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="founded"
          v-model="founded"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">products</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="products"
          v-model="products"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">createdIn</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="createdIn"
          v-model="createdIn"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveProduct">
        SAVE
      </button>
    </div>
  </div>
</template> -->
<!-- <template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Name"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="founded"
            label="Name"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="products"
            label="Name"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="createdIn"
            label="Name"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="control">
        <button class="button is-success" @click="saveProduct">
          SAVE
        </button>
      </div>
    </v-container>
  </v-form>
</template> -->
<template>
  <v-form>
    <v-container>
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
            v-model="founded"
            label="Founded"
            hint="yyyy/mm/dd"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="products"
            label="Products"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="createdIn"
            label="CreatedIn"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col> </v-row
      ><v-btn color="white" class="mr-4"
        ><router-link
          class="text-black"
          :to="{ name: `Home` }"
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
  name: 'AddBrand',
  data() {
    return {
      name: '',
      slug: '',
      founded: '',
      products: [],
      createdIn: '',
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post('http://localhost:3000/api/v1/brands', {
          name: this.name,
          slug: this.name,
          founded: this.founded,
          products: this.products,
          createdIn: this.createdIn,
          createdAt: Date.now(),
        });
        this.name = '';
        this.founded = '';
        this.products = [];
        this.createdIn = '';
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
