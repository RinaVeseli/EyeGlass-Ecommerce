<template>
  <Header />
  <div class="mai">
    <div class="maindetails">
      <div class="img">
        <v-card max-width="944" height="500" class="mx-auto">
          <v-carousel
            :continuous="true"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-circle"
            height="460"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <img
                :src="
                  'http://localhost:3000/img/eyeglasses/' + images[i]
                "
                height="100%"
                tile
              />
            </v-carousel-item>
          </v-carousel>
        </v-card>
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
        <button @click="addToCart($route.params._id)" :disabled="isInCart" class="addtocart"><p>{{cartText}}</p></button>
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
      images: [],

      slides: ['First', 'Second', 'Third', 'Fourth'],
      isInCart: false,
      cartText: 'Add To Cart',
    };
  },
  created: function () {
    this.getProductById();
    this.checkCart();
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
        this.images = response.data.data.data.images;
        console.log(this.images);
      } catch (err) {
        console.log(err);
      }
    },
    async addToCart(id){
      try {
        await axios.post(`http://localhost:3000/api/v1/cart/${id}`);
        this.isInCart = true;
        this.cartText = 'Already in cart'
        this.$router.replace('/shopping-cart')
      } catch (error) {
        console.log(error);
      }
    },
    
  checkCart() {
      // fetch cart data from server
      axios.get('http://localhost:3000/api/v1/cart').then(response => {
        // check if product is already in cart
        console.log(response.data.data.cartItems);
        if (response.data.data.cartItems.some(p => p.eyeglasses === this.$route.params._id)) {
          this.isInCart = true;
          this.cartText = 'Already in cart'
        }
      });
    },
  }
}


</script>

<style lang="scss">
.maindetails {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  padding: 60px 0;
  box-shadow: 0px 12px 10px -15px #111;
  align-items: center;
  height: 750px;
}
.mx-auto {
  border: none;
}
.mainDetail {
  margin-left: -130px;
  width: 29.125vw;
  max-width: 540px;
  min-width: 450px;
}
.details {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.nameRating h1 {
  font-size: 30px;
  font-weight: 700;
  padding: 15px 0;
}
.nameRating h2 {
  font-size: 20px;
}
.img img {
  width: 900px;
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
  margin-top: 8px;
  display: flex;
  gap: 10px;
  border-radius: 10px;
  border: solid black 2px;
  height: 80px;
  align-items: center;
}
.payments h3 {
  background-color: #bacfe8;
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
  background-color: #0071bc;
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
  width: 700px;
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
.descBox {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .imgFrame {
    flex: 1;
    margin-right: 20px;

    img {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      max-width: 700px;
    }
  }

  .desc {
    flex: 2;

    .paragraph {
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
      }
    }

    .otherDetails {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 767px) {
        flex-direction: column;
      }

      .firstColumn,
      .SecondColumn {
        flex: 1;
        margin-right: 20px;

        @media screen and (max-width: 767px) {
          margin-right: 0;
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 5px;
        }
      }

      .SecondColumn {
        margin-right: 0;

        @media screen and (max-width: 767px) {
          margin-top: -20px;
        }
      }
    }
  }
}
</style>
