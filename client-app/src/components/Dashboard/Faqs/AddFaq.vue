<template>
  <v-form class="p-6">
    <v-container>
      <div class="title">
        <h1>Create new Faq</h1>
      </div>

      <v-row>
        <v-col cols="12" sm="5">
          <v-text-field
            v-model="question"
            label="Question"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="answer"
            label="Answer"
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
  name: 'CreateFaq',
  data() {
    return {
      question: '',
      answer: '',
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post('http://localhost:3000/api/v1/faq', {
          question: this.question,
          answer: this.answer,
        });
        this.question = '';
        this.answer = '';

        this.$router.push('/admin/dashboard/faqs');
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
