<template>
  <footer id="footer">
    <section class="footer__news">
      <div class="container-fluid" style="max-width: 1440px">
        <div class="row">
          <div class="col-12" style="text-align: center">
            <p class="footer__news-text">
              Subscribe to our mailing list for insider news, product
              launches, and more!
            </p>
            <form
              name="iterable_optin"
              action="//links.iterable.com/lists/publicAddSubscriberForm?publicIdString=657a4ee6-b4b2-48a8-ab0a-c40aa18ce268"
              target="_blank"
              method="POST"
              class="email"
              style="margin-bottom: 0px"
            >
              <input
                class="footer__news-input"
                type="text"
                name="email"
                size="22"
                onfocus="if(this.value===this.defaultValue){this.value='';}"
                onblur="if(this.value===''){this.value=this.defaultValue;}"
                placeholder="Enter email address"
                style="
                  margin-right: 5px !important;
                  margin-bottom: 5px !important;
                "
              />
              <input
                type="hidden"
                name="storeId"
                size="22"
                value="OptiContacts.com"
              />
              <input
                type="submit"
                value="Subscribe"
                class="footer__news-submit button selectRX"
                style="margin: 0px !important"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="footer">
        <div class="box-container">
          <div class="footerBbox">
            <h3>CUSTOMER CARE</h3>
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i>
              taco</router-link
            >
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i>
              burrito</router-link
            >
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i>
              nachos</router-link
            >
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i> side
              food
            </router-link>
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i>
              dessert</router-link
            >
            <router-link @click="scrollToTop()" to="/menu"
              ><i class="fa-solid fa-circle-chevron-right"></i>
              drink</router-link
            >
          </div>

          <div class="footerBbox">
            <h3>QUICK LINKS</h3>
            <router-link @click="scrollToTop()" to="/">
              <i class="fa-solid fa-circle-chevron-right"></i>
              home</router-link
            >
            <router-link @click="scrollToTop()" to="/about">
              <i class="fa-solid fa-circle-chevron-right"></i>
              about</router-link
            >
            <router-link @click="scrollToTop()" to="/promotions">
              <i class="fa-solid fa-circle-chevron-right"></i>
              promotions
            </router-link>
            <router-link @click="scrollToTop()" to="/menu">
              <i class="fa-solid fa-circle-chevron-right"></i>
              menu</router-link
            >
            <router-link @click="scrollToTop()" to="/table">
              <i class="fa-solid fa-circle-chevron-right"></i> book a
              table
            </router-link>
          </div>

          <div class="footerBbox">
            <h3>SHOP WITH CINFIDENCE</h3>
            <P
              >OptiContacts.com guarantees the lowest possible price
              on your contact lenses. On top of low prices, you will
              receive world class customer service and super fast
              shipping.</P
            >
          </div>
          <div class="footerBbox">
            <img class="text-lg-center" :src="logo" />
          </div>
        </div>

        <div class="bottom">
          <div class="share">
            <a
              href="https://www.facebook.com/"
              class="fab fa-facebook"
            >
            </a>
            <a
              href="https://twitter.com/?lang=en"
              class="fab fa-twitter"
            ></a>
            <a
              href="https://www.instagram.com/"
              class="fab fa-instagram"
            ></a>
            <a
              href="https://www.pinterest.com/"
              class="fab fa-pinterest"
            ></a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
import logo from '../../assets/303-3037502_2017-atlantic-eye-center-eye-optical-logo-removebg-preview.png';

export default {
  data: function () {
    return {
      logo: logo,

      //   navigationItems: [
      //     { path: '/', name: 'HOME' },
      //     { path: '/autoship', name: 'AUTOSHIP' },
      //     { path: '/contacts', name: 'CONTACTS' },
      //     { path: '/glasses', name: 'GLASSES' },
      //     { path: '/sunglasses', name: 'SUNGLASSES' },
      //     { path: '/about', name: 'ABOUT' },
      //     { path: '/login', name: 'LOGIN' },
      //     { path: '/register', name: 'REGISTER' },
      //     // { path: '/edit', name: 'Edit' },
      //     { path: '/create', name: 'CREATE' },
      //   ],
    };
  },
};
</script>
<style>
.footer__news {
  padding-top: 40px;
  padding-bottom: 40px;
  background: #0071bc;
}
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.footer__news-text {
  font-size: 48px;
  color: #fff;
  line-height: 58px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
}
input,
button,
select,
optgroup,
textarea {
  background-color: #fff;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.footer__news-input {
  background-color: white;
  padding: 10px 9px 8px 9px;
  border: none;
  border-radius: 5px;
  width: 300px;
}
.footer {
  background: #f7f7f7;
  padding: 4rem 9%;
}
.footer .news-letter {
  text-align: center;
  margin-bottom: 2rem;
}
.footer .news-letter h3 {
  font-size: 2.5rem;
  color: #130f40;
  padding-bottom: 1rem;
}
.footer .news-letter form {
  max-width: 70rem;
  margin: 1rem auto;
  max-width: 70rem;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
}
.footer .news-letter form input[type='email'] {
  height: 100%;
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.6rem;
  color: #130f40;
  text-transform: none;
}
.footerBbox {
  /* background-color: white; */
  border-radius: 6px;
  /* box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%); */
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
.footer .news-letter form input[type='submit'] {
  padding: 0 2rem;
  font-size: 1.6rem;
  color: #fff;
  background: #27ae60;
  cursor: pointer;
}
.footer .news-letter form input[type='submit']:hover {
  background: #130f40;
}
.footer .box-container {
  padding: 0px 40px 0px 90px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1.5rem;
}
.footer .box-container .footerBbox h3 {
  font-size: 20px;
  color: #130f40;
  padding: 0.5rem 0;
}

.footer .box-container .footerBbox p {
  font-size: 1.2rem;
  color: #666;
  padding: 1rem 0;
}
.footer .box-container .footerBbox a {
  display: block;
  font-size: 1.1rem;
  color: #666;
  padding: 0.3rem 0;
}
.footer .box-container .footerBbox a:hover {
  color: #0071bc;
}

.footer .box-container .footerBbox a i {
  padding-right: 0.5rem;
  color: #bacfe8;
}
.footer .bottom {
  padding-top: 1rem;
  text-align: center;
}
.footer .bottom .share {
  margin: 2.5rem 0 0rem 0rem;
  align-items: end;
}
.footer .bottom .share a {
  height: 3.5rem;
  width: 3.5rem;
  line-height: 3.5rem;
  font-size: 2rem;

  border-radius: 0.5rem;
  margin: 0 0.3rem;
  color: #fff;
  background: #bacfe8;
}
.footer .bottom .share a:hover {
  background: #130f40;
}
@media (max-width: 576px) {
  .footer .box-container {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
}
.footerBbox img {
  width: 350px;
  height: auto;
}
</style>
