<template>
  <v-form>
    <v-container>
      <div class="title">
        <h1>Edit Faq</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
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
  name: 'EditFaq',
  data() {
    return {
      question: '',
      answer: '',
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
          `http://localhost:3000/api/v1/faq/${this.$route.params._id}`
        );

        this.question = response.data.data.data.question;
        this.answer = response.data.data.data.answer;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.patch(
          `http://localhost:3000/api/v1/faq/${this.$route.params._id}`,
          {
            question: this.question,
            answer: this.answer,
            createdAt: Date.now(),
          }
        );

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
