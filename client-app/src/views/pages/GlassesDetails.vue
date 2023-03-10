<template>
  <Header />
  <div class="mai">
    <div class="maindetails">
      <div class="img">
        <img
          :src="'http://localhost:3000/img/eyeglasses/' + imageCover"
          alt="Product Photo"
        />
      </div>
      <div class="mainDetail">
        <div class="details">
          <div class="nameRating">
            <h1>{{ name }}</h1>
            <h2>Rating: {{ ratingsAverage }}</h2>
          </div>
          <v-btn icon class="mx-1">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
        </div>
        <div class="priceCoupon">
          <div class="price">
            <h3>US ${{ price }}</h3>
          </div>
          <div class="couponsDetails">
            <div class="firstOrder">
              <h3>Us $5 Off First Order</h3>
            </div>
            <button>Coupons</button>
          </div>
        </div>
        <div class="payments">
          <h3>Klarna.</h3>
          <h2>4 interest-free payments of $7.23.</h2>
        </div>
        <div class="color">
          <h1>
            Color : <b>{{ color }}</b>
          </h1>
        </div>
        <div class="size">
          <h1>
            Size : <b>{{ size }}</b>
          </h1>
        </div>
        <button class="addtocart"><p>Add to cart</p></button>
      </div>
    </div>
    <div class="productDescr">
      <h1>Product Description</h1>

      <div class="descBox">
        <div class="imgFrame">
          <img
            src="https://cdn.shopify.com/s/files/1/0580/0506/1839/files/Size_Chart_480x480.jpg?v=1624999929"
          />
        </div>
        <div class="desc">
          <div class="paragraph">
            <p>
              Made with premium materials, these sunglasses are
              stylish yet classic. The square frame will leave you a
              deep impression at first sight. Designed with exquisite
              metal hinges, this chic pair of sunglasses is extremely
              versatile and comfortable. Spring hinges offer you a
              comfortable fit.
            </p>
            <div class="otherDetails">
              <div class="firstColumn">
                <p>SKU: ZTT078112-02-S0</p>
                <p>Shape: Cat eye</p>
                <p>Wide 56.15-42.88-144</p>
                <p>Materials: TR90</p>
                <p>Weight: 10.4 g</p>
              </div>
              <div class="SecondColumn">
                <p>RX Range: -20.00~+12.00</p>
                <p>PD Range: 54~78</p>
                <p>Progressive: NO</p>
                <p>Spring Hinge: NO</p>
                <p>Spring Hinge: NO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import axios from 'axios';
import Footer from '../../components/Common/Footer.vue';
import Header from '../../components/Common/Header.vue';
export default {
  name: 'glasses-details',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: '',
      color: '',
      frameSize: '',
      ratingsAverage: '',
      //   ratingsQuantity: '',
      price: '',
      priceDiscount: '',
      description: '',
      imageCover: null,
      images: null,
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
          `http://localhost:3000/api/v1/eyeGlasses/${this.$route.params._id}`
        );

        this.name = response.data.data.data.name;
        this.color = response.data.data.data.color;
        this.frameSize = response.data.data.data.frameSize;
        this.ratingsAverage = response.data.data.data.ratingsAverage;
        this.price = response.data.data.data.price;
        this.priceDiscount = response.data.data.data.priceDiscount;
        this.description = response.data.data.data.description;
        this.imageCover = response.data.data.data.imageCover;
        this.images = response.data.data.data.images[0];
        console.log(this.imageCover);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
.maindetails {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 60px 0;
  border-bottom: solid rgb(142, 142, 142) 1px;
}
.mainDetail {
  width: 28.125vw;
  max-width: 540px;
  min-width: 450px;
  padding-top: 2.08vw;
}
.details {
  padding-top: 2.08vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nameRating h1 {
  padding: 15px 0;
}
.img img {
  width: 700px;
  height: auto;
  object-fit: cover;
  border-radius: 40px;
}
.priceCoupon {
  margin: 1.875vw 0 0;
  padding: 1.5625vw 1.354vw 0.5vw;
  background: #f5f6f8;
  border-radius: 5px;
}
.couponsDetails {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}
.payments {
  display: flex;
  gap: 10px;
  border-radius: 10px;
  border: solid black 2px;
  height: 80px;
  align-items: center;
}
.payments h3 {
  background-color: blueviolet;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
.color,
.size {
  margin: 10px;
}
.addtocart {
  width: 100%;
  background-color: aqua;
  color: white;
  border-radius: 10px;
  height: 80px;
}
.addtocart p {
  font-size: 30px;
}
.productDescr {
  padding: 40px;
}
.productDescr h1 {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
}
.imgFrame,
.desc {
  display: flex;
  justify-content: center;
}
.imgFrame img {
  width: 400px;
  height: auto;
  object-fit: cover;
}
.descBox {
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.desc {
  padding: 30px;
}
.otherDetails {
  width: 70%;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  float: inline-start;
  align-items: center;
}
.firstColumn p,
.SecondColumn p {
  padding: 10px;
}
</style>
