<template>
  <Header />
  <v-container class="wishlist__page">
    <h1>WISHLIST</h1>
    <v-row>
      <v-col v-for="item in eyeglasses" :key="item._id">
        <v-card class="mx-auto" width="350" max-width="350">
          <router-link
            :to="{
              name: 'glasses-details',
              params: { _id: item._id },
            }"
          >
            <v-img
              :src="
                'http://localhost:3000/img/eyeglasses/' +
                item.imageCover
              "
              height="200px"
              cover
            ></v-img>
          </router-link>
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-subtitle>
            Price: {{ item.price }}€
          </v-card-subtitle>
          <v-card-subtitle> Color: {{ item.color }} </v-card-subtitle>
          <v-card-subtitle>
            Frame Size: {{ item.frameSize }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="#1565C0" variant="text">
              Description
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Common/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      wishlist: [],
      eyeglasses: [],
      show: false,
    };
  },
  created: function () {
    this.getUsersWishlist();
  },
  methods: {
    async getUsersWishlist() {
      await axios
        .get('http://localhost:3000/api/v1/wishlist')
        .then((response) => {
          this.wishlist = response.data.data.wishlist;
          this.wishlist.forEach((item) => {
            this.eyeglasses.push(item.eyeglasses);
          });
          console.log(this.wishlist);
          console.log(this.eyeglasses);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getImgUrl(pic) {
      return require('@/../../server/public/img/eyeglasses/' + pic);
    },
  },
};
</script>

<style>
.wishlist__page {
  margin-top: 3%;

  min-height: 90%;
  background-color: aliceblue;
  border-radius: 10px;
}

.wishlist__page h1 {
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  color: #0d47a1;
  margin-bottom: 3%;
}
</style>
