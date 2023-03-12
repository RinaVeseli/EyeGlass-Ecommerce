<template>
  <div id="app">
    <div class="header2">
      <h1>Frequently Asked Questions</h1>
    </div>
    <div class="faqs">
      <FAQ
        v-for="(faq, i) in faqs"
        :faq="faq"
        :index="i"
        :key="i"
        :open="faq.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
  <router-link class="hero__product-link" to="/">
    <div class="faqButton">
      <button class="hero__product-link__btn default-btn">
        All FAQ
      </button>
    </div>
  </router-link>
</template>

<script>
import FAQ from './FAQ';
import axios from 'axios';
export default {
  name: 'app',

  components: {
    FAQ,
  },
  data() {
    return {
      faqs: [],
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/faq'
        );

        this.faqs = response.data.data.data;
        console.log(this.faqs);
      } catch (err) {
        console.log(err);
      }
    },
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #eee;
  font-family: sans-serif;
}

.header2 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0px 45px 0px;
}
.header2 h1 {
  color: #2e2e2e;
  font-size: 36px;
  font-weight: 250;
  font-feature-settings: 'lnum';
}

.faq {
  display: block;
  width: 100%;
  cursor: pointer;
  max-width: 1268px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.faq .question {
  margin-left: 10px;
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.faq .question::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-image: url('https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  margin-left: 10px;
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}
.faqButton {
  display: flex;
  justify-content: center;
  padding: 50px;
}
.hero__product-link__btn {
  padding: 15px 45px;
  color: #0071bc;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  border: 1px solid #0071bc;
  border-radius: 5px;
}
</style>
