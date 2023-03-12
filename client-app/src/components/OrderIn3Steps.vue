<template>
  <section class="homepage__steps">
    <div class="container" style="max-width: 1440px">
      <div class="rowSteps">
        <div class="col-12 text-center">
          <p class="homepage__heading">Order in 3 easy steps</p>
        </div>
      </div>
      <div class="rowSteps" v-for="item in items" :key="item._id">
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
          <div
            class="homepage__order-wrapper"
            style="min-height: 100%; border-top: 10px solid #bacfe8"
          >
            <div style="padding: 24px">
              <p
                class="homepage__numbers"
                style="
                  margin-bottom: 12px;
                  font-size: 36px;
                  font-weight: 300;
                  color: #2e2e2e;
                "
              >
                {{ item.number }}
              </p>
              <p
                class="homepage__order-heading"
                style="
                  line-height: 28px;
                  margin-bottom: 12px;
                  font-size: 24px;
                  font-weight: 700;
                  color: #2e2e2e;
                "
              >
                {{ item.header }}
              </p>
              <p
                style="
                  margin-bottom: 0;
                  font-size: 15px;
                  color: #909090;
                "
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 col-lg-4 mb-3 mb-lg-0">
          <div
            class="homepage__order-wrapper"
            style="min-height: 100%; border-top: 10px solid #89afe0"
          >
            <div style="padding: 24px">
              <p
                class="homepage__numbers"
                style="
                  margin-bottom: 12px;
                  font-size: 36px;
                  font-weight: 300;
                  color: #2e2e2e;
                "
              >
                02
              </p>
              <p
                class="homepage__order-heading"
                style="
                  line-height: 28px;
                  margin-bottom: 12px;
                  font-size: 24px;
                  font-weight: 700;
                  color: #2e2e2e;
                "
              >
                Enter quantity &amp; prescription
              </p>
              <p
                style="
                  margin-bottom: 0;
                  font-size: 15px;
                  color: #909090;
                "
              >
                Upload your Rx, you can take a picture with your phone
                or enter your prescription details manually.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-3 mb-lg-0">
          <div
            class="homepage__order-wrapper"
            style="min-height: 100%; border-top: 10px solid #0071bc"
          >
            <div style="padding: 24px">
              <p
                class="homepage__numbers"
                style="
                  margin-bottom: 12px;
                  font-size: 36px;
                  font-weight: 300;
                  color: #2e2e2e;
                "
              >
                03
              </p>
              <p
                class="homepage__order-heading"
                style="
                  line-height: 28px;
                  margin-bottom: 12px;
                  font-size: 24px;
                  font-weight: 700;
                  color: #2e2e2e;
                "
              >
                Place your order
              </p>
              <p
                style="
                  margin-bottom: 0;
                  font-size: 15px;
                  color: #909090;
                "
              >
                To make it even easier, sign up for autoship and get
                your contacts automatically delivered to you. Let us
                do the work for you!
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';

export default {
  name: 'OrderSteps',

  data() {
    return {
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
          'http://localhost:3000/api/v1/orderSteps'
        );

        this.items = response.data.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style>
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 970px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.rowSteps {
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.text-center {
  text-align: center !important;
}
.homepage__heading {
  margin: 48px 0;
  font-size: 36px;
  font-weight: 300;
  color: #2e2e2e;
  font-feature-settings: 'lnum';
}
.homepage__order-wrapper {
  background: #ffffff;
  box-shadow: 0px 4px 25px rgb(0 0 0 / 8%);
  font-feature-settings: 'lnum';
}
@media (min-width: 992px) {
  .col-lg-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
</style>
