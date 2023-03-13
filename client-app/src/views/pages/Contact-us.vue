<template>
  <Header />
  <section>
    <div class="master-wrap">
      <v-container>
        <div class="page-title"></div>
      </v-container>
    </div>
  </section>
  <section>
    <v-form class="v-form1">
      <h1 class="contact-form">contact-us</h1>
      <v-row class="v-row1">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Enter your name"
            persistent-hint
            variant="solo"
            v-bind:error-messages="nameErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="number"
            label="Contact number"
            persistent-hint
            variant="solo"
            v-bind:error-messages="numberErrors"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" class="v-email">
          <v-text-field
            v-model="email"
            label="Enter your email address"
            persistent-hint
            variant="solo"
            v-bind:error-messages="emailErrors"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-autocomplete
        clearable
        label="Please select..."
        :items="['Compliment', 'Complaint', 'Product or Price Query']"
        multiple
        variant="solo"
      ></v-autocomplete>
      <v-textarea
        v-model="enquiry"
        clearable
        label="Enquiry"
        variant="solo"
        v-bind:error-messages="enquiryErrors"
      ></v-textarea>
      <div class="btns">
        <v-btn @click="saveProduct" class="submitBtn"> Submit </v-btn>
      </div>
    </v-form>
  </section>
  <Footer />
</template>
<script>
// import axios
import axios from 'axios';
import Footer from '../../components/Common/Footer.vue';
import Header from '../../components/Common/Header.vue';
export default {
  name: 'AddContact',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: '',
      number: '',
      email: '',
      enquiry: '',
      nameErrors: [],
      numberErrors: [],
      emailErrors: [],
      enquiryErrors: [],
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      this.nameErrors = [];
      this.numberErrors = [];
      this.emailErrors = [];
      this.enquiryErrors = [];

      if (!this.name) {
        this.nameErrors.push('Name is required');
      }
      if (!this.number) {
        this.numberErrors.push('Color is required');
      }
      if (!this.email) {
        this.emailErrors.push('Material is required');
      }
      if (!this.enquiry) {
        this.enquiryErrors.push('Price is required');
      }
      if (!this.description) {
        this.descriptionErrors.push('Description is required');
      }
      if (
        this.nameErrors.length ||
        this.numberErrors.length ||
        this.emailErrors.length ||
        this.enquiryErrors.length
      ) {
        return;
      }
      try {
        await axios.post('http://localhost:3000/api/v1/contact', {
          name: this.name,
          number: this.number,
          email: this.email,
          enquiry: this.enquiry,
          createdAt: Date.now(),
        });
        this.name = '';
        this.number = '';
        this.email = '';
        this.enquiry = '';
        this.$router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
html .master-wrapper-page .page-title {
  background-image: url(https://static.payneglasses.com/resource/eyeglasses_page/images/BifocalLenses_pc.jpg);
}

@media (min-width: 1201px) {
  .page-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background: url(https://static.payneglasses.com/resource/eyeglasses_page/images/BifocalLenses_pc.jpg)
      no-repeat;
    text-align: center;
    box-shadow: -1px 8px 6px 0px rgba(170, 166, 166, 0.82);
    -webkit-box-shadow: -1px 8px 6px 0px rgba(170, 166, 166, 0.82);
    -moz-box-shadow: -1px 8px 6px 0px rgba(170, 166, 166, 0.82);
  }

  .v-form1 {
    width: 100%;
    text-align: center;
    padding: 70px 240px;
    margin-top: 300px;
  }
  .v-form1 h1 {
    text-align: center;
    padding-bottom: 50px;
    font-size: 30px;
    text-transform: uppercase;
    color: #0071bc;
    font-weight: 700;
  }
}
@media (min-width: 1201px) {
  .page-title h1 {
    margin-top: 220px;
    font-size: 30px;
    font-weight: 700;
    line-height: 46px;
  }
}
.v-row1 {
  display: flex;

  flex: 1 1 auto;
  margin: -12px;
}
.page-title h1 {
  display: inline-block;
  position: relative;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #222;
}
.btns {
  padding: 30px;
  display: flex;
  justify-content: center;
}
.btns .submitBtn {
  height: 70px;
  width: 160px;
  font-size: large;
  color: white;
  background-color: #0071bc;
}
@media only screen and (min-width: 467px) {
  .contact-form h1 {
    text-align: center;
    padding-bottom: 50px;
    font-size: 30px;
    text-transform: uppercase;
    color: #0071bc;
    font-weight: 700;
  }
}
</style>
