<template>
  <Header />
  <div v-if="isLoading" class="loading">
    <i class="fas fa-spinner fa-spin"></i>
    <span>Loading...</span>
  </div>
  <transition name="fade">
    <section class="aboutSection">
      <img
        v-for="item in items"
        :key="item._id"
        class="photo__about"
        :src="'http://localhost:3000/img/about/' + item.file"
        alt="About image"
      />
    </section>
  </transition>
  <transition name="fade">
    <section class="aboutSection">
      <div
        id="shopify-section-about-us-content"
        class="shopify-section about-us-content-sections"
        v-for="item in items"
        :key="item._id"
      >
        <div
          class="about-us-content"
          data-section-id="about-us-content"
          data-section-type="about-us-content-section"
        >
          <div class="container">
            <div class="col-left">
              <h3 class="heading">ABOUT HIMALAYA OPTICAL</h3>
              <div class="content">
                {{ item.about }}
              </div>
            </div>
            <div class="col-right">
              <h3 class="heading">THE TEAM OF HIMALAYA OPTICAL</h3>
              <div class="content">
                {{ item.team }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="about-us-content"
          data-section-id="about-us-content"
          data-section-type="about-us-content-section"
        >
          <div class="container">
            <div class="col-left">
              <h3 class="heading">OUR MISSION</h3>
              <div class="content">
                {{ item.mission }}
              </div>
            </div>
            <div class="col-right">
              <h3 class="heading">OUR VISION</h3>
              <div class="content">
                {{ item.vision }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="about-us-content"
          data-section-id="about-us-content"
          data-section-type="about-us-content-section"
        >
          <div class="container">
            <h3 class="heading">From The Director's Desk</h3>
            <div class="content">
              <p>
                <b>"{{ item.quote }}"</b>
              </p>
              {{ item.directorDesk }}

              <p>
                <br />
                {{ item.contact }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
  <Footer />
</template>
<script>
import axios from 'axios';
import Header from '../../components/Common/Header.vue';
import Footer from '../../components/Common/Footer.vue';
export default {
  name: 'About',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isLoading: true,
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/about'
        );

        this.items = response.data.data.abouts;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.$nextTick(() => {
        this.$el.querySelector('.mainDiv').classList.add('loaded');
      });
    }, 500);
    this.getProducts();
  },
};
</script>
<style>
.aboutSection {
  display: flex;
  justify-content: center;
}
.photo__about {
  padding: 40px;
  max-width: 100%;
  display: flex;
  float: center;
}
.about-us-content {
  padding: 65px 0 55px;
  overflow: hidden;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media only screen and (min-width: 993px) {
  .about-us-content .col-right,
  .about-us-content .col-left {
    width: 50%;
    padding-right: 40px;
    margin-bottom: 0;
    float: left;
    letter-spacing: 0;
  }
}
.about-us-content .heading {
  color: #0071bc;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  margin-bottom: 40px;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.about-us-content .heading:after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background-color: #0071bc;
  position: absolute;
  left: 0;
  bottom: -20px;
}
p {
  margin: 0 0 19.44444px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
