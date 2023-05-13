<template>
  <v-container>
    <div class="flex-column">
      <div class="flex-column fill-height">
        <div class="d-flex style">
          <v-spacing><h1>Reviews from Customers</h1></v-spacing>
        </div>
      </div>
      <v-table
        fixed-header
        height="600px"
        class="ml-4 flex-grow-1 table-container"
      >
        <thead>
          <tr>
            <th class="text-left">Email</th>
            <th class="text-left">Name</th>
            <th class="text-left">Review</th>
            <th class="text-left">Rating</th>
            <th class="text-left">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="review in reviews" :key="review._id">
            <td>{{ review.userEmail }}</td>
            <td>{{ review.name }}</td>
            <td>{{ review.review }}</td>
            <td>{{ review.rating }}</td>
            <td>{{ review.createdAt }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      reviews: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/v1/review'
      );
      this.reviews = response.data;
      console.log(response);
    } catch (error) {
      console.error(`Error loading reviews: ${error}`);
    }
  },
};
</script>
<style>
h1 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 40px;
}
</style>
