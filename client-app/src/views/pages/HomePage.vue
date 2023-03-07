<template>
  <section class="hero">
    <div class="newhero">
      <div class="heroes">
        <p class="hero__product-tag">
          WELCOME! ENJOY YOUR EXCLUSIVE OFFER
        </p>
        <h1 class="hero__product-name">
          30% Off* Your First Contacts Order
        </h1>
        <p class="hero__product-description">
          Infinite convenience and endless savings await with
          autoship.<br />
          Sign up at checkout today!
        </p>
        <router-link
          class="hero__product-link"
          to="/product/xx99-mark-two-headphones"
        >
          <button class="hero__product-link__btn default-btn">
            SHOP NOW
          </button>
        </router-link>
      </div>
      <div class="part1photo d-none">
        <img
          src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/cexpress_contacts.png"
        />
      </div>
    </div>
  </section>
  <section class="part2">
    <div class="postext">
      <p>Why you'll love Opticontacts.com</p>
    </div>

    <div class="row2">
      <div
        class="col-4 col-md-2"
        style="
          display: flex;
          align-self: center;
          justify-content: center;
        "
      >
        <img
          src="https://venturebeat.com/wp-content/uploads/2019/03/36c1bb7b-e731-4570-910c-5b37cfe81e82.png?fit=1800%2C1000&strip=all"
        />
      </div>
      <div
        class="col-4 col-md-2"
        style="
          display: flex;
          align-self: center;
          justify-content: center;
        "
      >
        <img
          src="https://cdn11.bigcommerce.com/s-r5k51kqrix/product_images/uploaded_images/price-match-guarantee.png"
        />
      </div>
      <div
        class="col-4 col-md-2"
        style="
          display: flex;
          align-self: center;
          justify-content: center;
        "
      >
        <img
          src="https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-fast-delivery-icon-delivery-icon-png-image_2047531.jpg"
        />
      </div>
      <div
        class="col-4 col-md-2"
        style="
          display: flex;
          align-self: center;
          justify-content: center;
        "
      >
        <img
          src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-shield-with-a-check-mark-safe-and-protect-logo-on-white-png-image_1870454.jpg"
        />
      </div>
      <!-- <img
          src="https://www.iconbunny.com/icons/media/catalog/product/2/3/2315.8-left-back-arrow-icon-iconbunny.jpg"
        /> -->
    </div>
  </section>

  <section>
    <div class="vision d-none d-xl-block">
      <img
        src="https://www.opticontacts.com/cart/images/shared/homepage/don_t_let_your_vision_benefits_expire_.png"
      />
    </div>
  </section>
  <section>
    <div class="container center">
      <div class="row">
        <div
          class="col-4 col-md-2 offset-md-1 offset-0"
          style="
            display: flex;
            align-self: center;
            justify-content: center;
          "
        >
          <a href="/contacts/brand-kits"
            ><img
              src="data:image/png;base64,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"
          /></a>
        </div>
        <div
          class="col-4 col-md-2"
          style="
            display: flex;
            align-self: center;
            justify-content: center;
          "
        >
          <a href="/contacts/brand-alcon"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_Alcon.svg/2560px-Logo_Alcon.svg.png"
          /></a>
        </div>
        <div
          class="col-4 col-md-2"
          style="
            display: flex;
            align-self: center;
            justify-content: center;
          "
        >
          <a href="/contacts/brand-johnson-and-johnson"
            ><img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Acuvue_logo.svg/1200px-Acuvue_logo.svg.png"
          /></a>
        </div>
        <div
          class="col-6 col-md-2 mt-3 mt-md-0"
          style="
            display: flex;
            align-self: center;
            justify-content: center;
          "
        >
          <a href="/contacts/brand-coopervision"
            ><img
              src="https://www.iapb.org/wp-content/uploads/2020/09/Footer_0004_Cooper-vision-2.jpg"
          /></a>
        </div>
        <div
          class="col-6 col-md-2 mt-3 mt-md-0"
          style="
            display: flex;
            align-self: center;
            justify-content: center;
          "
        >
          <a href="/contacts/brand-bausch-and-lomb"
            ><img
              src="https://theuspiregroup.b-cdn.net/wp-content/uploads/2021/06/Bausch__Lomb-Logo.wine_-e1623923989422-1.png"
          /></a>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <section class="section mb-6">
        <!-- WIDGET: HalfWidthContent, widgetID:  4099276460824401267, widgetSuffix: _5_-5006_4099276460824401267 --><!-- Espot name: Widget_HalfWidthWidget_TO_4099276460824401267 -->
        <h2
          id="title_5_-5006_4099276460824401267"
          class="section__title"
        >
          <div class="lh-60 mb-5 mb-md-6">
            There's always more to discover<br />
            at Target Optical
          </div>
        </h2>
        <div class="d-md-flex">
          <div class="w-md-50 mr-md-2">
            <!-- 1 -->
            <div
              class="feature js-feature mb-md-4"
              data-hover-color="#efca4c"
              style="background-color: rgb(232, 234, 236)"
            >
              <img
                class="feature__icon d-none d-md-block"
                src="https://www.targetoptical.com/wcsstore/TargetOpticalStorefrontAssetStore/responsive30/images/icon-new.svg"
                alt="new icon"
              />
              <a
                arialabel="new-arrivals"
                data-element-id="X_HP_Zone3_NewArrivals"
                data-description="NewArrivals"
                href="/to-us/new-arrivals"
                aria-label="new arrival"
                class="d-block keyboardAccessible"
              >
                <div class="feature__body text-center">
                  <img
                    class="d-block d-md-none img-fluid mx-auto"
                    src="https://i.pinimg.com/736x/2b/5f/36/2b5f369c3cdb78d4d1b6980600780c31.jpg"
                    width="290"
                    alt="Glasses"
                  />
                  <!-- @md+ -->
                  <img
                    src="https://i.pinimg.com/736x/2b/5f/36/2b5f369c3cdb78d4d1b6980600780c31.jpg"
                    alt="New Arrivals"
                    width="1050"
                    class="d-none d-md-block img-fluid mx-auto"
                  />

                  <div class="feature__title text-uppercase">
                    New arrivals
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="w-md-50 ml-md-2">
            <!-- 2 -->
            <div
              class="feature js-feature mb-md-4"
              data-hover-color="#98cdf9"
              style="background-color: rgb(232, 234, 236)"
            >
              <img
                class="feature__icon d-none d-md-block"
                src="https://www.targetoptical.com/wcsstore/TargetOpticalStorefrontAssetStore/responsive30/images/icon-shopper.svg"
                alt="icon shopper"
              />
              <a
                aria-label="best-sellers"
                data-element-id="X_HP_Zone3_BestSellers"
                data-description="BestSellers"
                href="/to-us/best-sellers"
                class="d-block keyboardAccessible"
              >
                <div class="feature__body text-center">
                  <img
                    class="d-block d-md-none img-fluid mx-auto"
                    src="https://cms.flandersopticians.be/optiek-van-den-wijngaert/wp-content/uploads/2020/04/SERENGETI-ST8988-Mara-CC_110.jpg"
                    width="290"
                    alt="Best-Seller-Mobile"
                  />
                  <!-- @md+ -->
                  <img
                    src="https://cms.flandersopticians.be/optiek-van-den-wijngaert/wp-content/uploads/2020/04/SERENGETI-ST8988-Mara-CC_110.jpg"
                    alt="Man and woman with glasses"
                    width="1050"
                    class="d-none d-md-block img-fluid mx-auto"
                  />

                  <div class="feature__title text-uppercase">
                    BEST SELLERS
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

  <section class="homepage__autoship">
    <div class="containerAutoship" style="max-width: 1540px">
      <div class="center homepage__autoship--container">
        <div class="rowAutoship">
          <div class="col-12 col-md-8 offset-md-2 px-5 px-md-3">
            <img
              class="img-fluid mb-5"
              src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/autoship-logo.svg"
            />
            <p class="homepage__autoship--heading">
              Your Contacts, On Repeat.
            </p>
            <p class="px-md-4 homepage__autoship--details">
              By signing up for
              <span style="color: #0071bc">autoship</span>
              today, you'll get 15% off*, exclusive offers and our
              price match guarantee. Never search for contacts deals
              again!
            </p>
            <p class="center" style="font-size: 12px">
              *Conditions apply
            </p>
            <div class="homepage__autohsip--ctas d-none d-sm-inline">
              <a
                href="/contacts"
                class="btn homepage__anchor"
                role="button"
                >Shop now</a
              >
              <a
                href="/autoship"
                class="btn homepage__anchor homepage__anchor--inverted"
                role="button"
                style="margin-left: 20px"
                >FAQ</a
              >
            </div>
            <div
              class="homepage__mobile--ctas d-sm-none mb-3 mb-lg-0"
            >
              <div class="row">
                <div class="col-6">
                  <a
                    href="/contacts"
                    class="btn homepage__anchor mobile-cta"
                    role="button"
                    >Shop now</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="/autoship"
                    class="btn homepage__anchor homepage__anchor--inverted mobile-cta"
                    role="button"
                    >FAQ</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowAutoship mt-5">
          <div
            class="col-5 col-lg-3 offset-1 offset-lg-0 px-0 px-lg-3 homepage__stats--wrapper"
          >
            <img
              style="height: 60px; margin-bottom: 12px"
              src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/Piggy_Bank.svg"
            />
            <p class="homepage__stats--heading">Save 10%</p>
            <p class="homepage__stats--text">
              Increased savings<br />on future orders
            </p>
          </div>
          <div
            class="col-5 col-lg-3 px-0 px-lg-3 homepage__stats--wrapper"
          >
            <img
              style="height: 60px; margin-bottom: 12px"
              src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/Price_Match.svg"
            />
            <p class="homepage__stats--heading">
              Price Match Guarantee
            </p>
            <p class="homepage__stats--text">
              On every <br />
              order
            </p>
          </div>
          <div
            class="col-5 col-lg-3 offset-1 offset-lg-0 px-0 px-lg-3 homepage__stats--wrapper"
          >
            <img
              style="height: 60px; margin-bottom: 12px"
              src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/Shipping.svg
              "
            />
            <p class="homepage__stats--heading">Free shipping</p>
            <p class="homepage__stats--text">
              On all<br />future orders
            </p>
          </div>
          <div
            class="col-5 col-lg-3 px-0 px-lg-3 homepage__stats--wrapper"
          >
            <img
              style="height: 65px; margin-bottom: 7px"
              src="https://www.opticontacts.com/cart/images/shared/homepage/legacy/loyalty_rewards.svg"
            />
            <p class="homepage__stats--heading">Loyalty Rewards</p>
            <p class="homepage__stats--text">
              Top tier savings &amp; perks <br />
              with each reorder
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <img
      class="photo__light__under"
      src="https://media.targetoptical.com/2022/Light-Under-Control-PLP/COM/Update-LUC-Dual-Image/LUC-HP-espot-D.jpg"
    />
  </section>
  <OrderIn3Step />

  <FAQVIEW />
</template>

<script>
import FAQVIEW from '../../components/FAQView.vue';
import OrderIn3Step from '../../components/OrderIn3Steps.vue';

export default {
  name: 'HomePage',
  components: { FAQVIEW, OrderIn3Step },
};
</script>

<style lang="css" scoped>
.hero {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10.8rem 0.3rem 8.7rem 1.3rem;
  margin: 0 auto;
}
.newhero {
  display: flex;
}

.hero__product-tag {
  margin-top: -50px;
  text-transform: uppercase;
  color: #8c8c8c;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.912rem;
}

.hero__product-name {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: 0.01em;
  margin: 1.6rem 0 2.4rem 0;
  width: 32.8rem;
}

.hero__product-description {
  color: #9c9c9c;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 2.8rem;
  width: 32.8rem;
}
.hero__product-link__btn {
  padding: 15px 45px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: #0071bc;
  border: 1px solid #0071bc;
  border-radius: 5px;
}

.postext {
  display: flex;
  justify-content: center;
}
.postext p {
  margin-bottom: 24px;
  font-size: 36px;
  font-weight: 300;
  color: #0071bc;
}
.possibility {
  display: flex;
  justify-content: space-around;
}
.pos img {
  width: 220px;
  height: 120px;
  object-fit: cover;
  margin: 20px;
}
#biog {
  display: flex;
  justify-content: space-around;
}
.hire {
  display: flex;
  justify-content: center;

  width: 90%;
  height: 200px;
  padding: 0px 30px;
  background-color: #f5f9ff;
  margin-top: -24px;
}
.hire p {
  display: flex;
  justify-content: center;
}
.desc {
  align-items: center;
  text-align: center;
}
.photo img {
  width: 200px;
  height: 150px;
}
@media (min-width: 1200px) {
  .vision {
    display: block !important;
    margin-bottom: 2rem;
    padding: 40px;
  }
}
@media (min-width: 1200px) {
  .part1photo {
    display: block !important;
  }
}

.row {
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0px 10px 15px -15px #111;
  justify-content: space-around;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.row img {
  width: 200px;
  height: auto;
}
.row2 {
  display: -ms-flexbox;
  display: flex;

  justify-content: center;
  gap: 10px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.row2 img {
  width: 200px;
  height: auto;
  object-fit: cover;
  margin: 20px;
}

.lh-60 {
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 6rem !important;
  letter-spacing: 4px;
  font-weight: 300;
  padding: 40px;
  color: #0071bc;
}
@media (min-width: 768px) {
  .section__title {
    line-height: 1.1;
    font-size: 30px;
    letter-spacing: 12px;
    margin-left: 60px;
    margin-right: 60px;
  }
}
@media screen and (max-width: 767px) {
  .lh-60 {
    line-height: 28px;
    font-size: 30px;
  }
}

.ct-q1-icon.feature__icon {
  top: -1.8rem;
}
.js-feature {
  display: flex;
  justify-content: center;
}
.js-feature :hover {
  background-color: rgba(235, 247, 243, 255);
}
.feature .js-feature img {
  width: 85px;
  height: 85px;
}
.feature__icon {
  position: absolute;
  margin-top: -3rem;
}
@media (min-width: 768px) {
  .w-md-50 {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .feature__body {
    padding: 60px;
  }
}
.border-box-fix *,
.border-box-fix ::after,
.border-box-fix ::before {
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .d-md-block {
    display: block !important;
  }
}

.feature__title {
  color: black;
  margin-top: -3rem;
  font-size: 30px;
  margin-bottom: 10px;
}
@media (min-width: 1200px) {
  .containerAutoship {
    max-width: 1170px;
  }
}
@media (min-width: 992px) {
  .containerAutoship {
    max-width: 970px;
  }
}
@media (min-width: 768px) {
  .containerAutoship {
    max-width: 750px;
  }
}
@media (min-width: 576px) {
  .containerAutoship {
    max-width: 540px;
  }
}
@media (min-width: 1200px) {
  .containerAutoship {
    max-width: 1140px;
  }
}
@media (min-width: 992px) {
  .containerAutoship {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .containerAutoship {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .containerAutoship {
    max-width: 540px;
  }
}
.containerAutoship {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.homepage__autoship--container {
  padding-top: 60px;
  padding-bottom: 32px;
  background-color: #f5f9ff;
  border-radius: 5px;
}
.rowAutoship {
  display: -ms-flexbox;
  gap: 100px;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
  margin-right: -15px;
  margin-left: -15px;
}

@media (min-width: 768px) {
  .col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}
.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
.center {
  text-align: center !important;
  margin-bottom: 40px;
}
.homepage__anchor {
  padding: 15px 45px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: #0071bc;
  border: 1px solid #0071bc;
  border-radius: 5px;
}
.homepage__anchor--inverted {
  color: #0071bc;
  background-color: #fff;
  border: 1px solid #0071bc;
}
.homepage__autoship--details {
  margin-bottom: 6px;
  font-size: 19px;
}
.rowAutoship .mt-5 {
  margin-top: 3rem !important;
}
.homepage__stats--text {
  font-size: 16px;
  color: #909090;
}
.homepage__stats--heading {
  margin-bottom: 12px;
  font-size: 20px;
  color: #2e2e2e;
  font-weight: 700;
}
.homepage__autoship--heading {
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
  color: #0071bc;
}
.photo__light__under {
  padding: 40px;
}
</style>
