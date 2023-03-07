<template>
  <section class="aboutSection">
    <img
      class="photo__about"
      src="https://cdn.shopify.com/s/files/1/0426/8490/7673/files/about_us_web_banner_2_2f7d04e8-6553-4d61-bcac-88c3a28d59e4.jpg?v=1628498275"
    />
  </section>
  <section class="aboutSection">
    <div
      id="shopify-section-about-us-content"
      class="shopify-section about-us-content-sections"
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
              It was in the year 1935 when Jeetmalji Binani laid the
              strong foundation of Himalaya Optical. His honest ardor
              gave our brand its first store- Himalaya Optical.
              Resting on the four pillars of perseverance, loyalty,
              grit and relentlessness, the brand strived to foray
              forward. Needless to say we have continued to evolve
              ever since remarkably. The optical industry in India had
              a gaping slot for a retail chain that could provide end
              to end solutions for vision challenges. To add to it,
              there has been a pressing market for quality and
              affordable eyewear. Himalaya Optical not only fulfills
              the need of the market but also elevates to provide the
              most fashionable eyewear.
            </div>
          </div>
          <div class="col-right">
            <h3 class="heading">THE TEAM OF HIMALAYA OPTICAL</h3>
            <div class="content">
              The third generation of Binanis effectively reigns over
              the business affairs and it has also started to bring
              the fourth generation in its tutelage to instill the
              same principles that set Himalaya Optical a class apart.
              Over and above, we take immense pride in introducing to
              you our inimitable task force that has been our
              strength. We have a team of qualified optometrists that
              are best at their jobs, dynamic executives that insist
              to serve and skilled technicians that leave no stone
              unturned to bring to you unforgettable vision-care
              solutions and technologically advanced eyewear. Service
              and dedication fuels us and the rest, as they say
              follows.
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
              We are into the business of “Optical Retailing” where
              customers are our assets and employees are our
              strengths. To attain a global leadership position, we
              need to preserve our assets and keep enhancing our
              strengths by constantly providing them a platform to
              enrich their experiences and enhance their leadership
              capabilities. We do not compromise on our core ethics
              and therefore we are able to give excellent value to our
              customers, employees and all stakeholders.
            </div>
          </div>
          <div class="col-right">
            <h3 class="heading">OUR VISION</h3>
            <div class="content">
              We aspire to achieve a global leadership position in
              providing ‘Perfect Vision’ to all eyes by building the
              largest optical retail network in India, delivering
              world class service and unforgettable eye care
              experience to our patrons.
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
            <b
              ><i
                >"Almost nothing needs to be said when you have
                eyes!"</i
              ></b
            >
            <p>
              This phrase had caught on with me very early in my life.
              I, Mr. Sarat Binani run the Himalaya Optical chain of
              eyewear with the blessings of the almighty, my kin and
              my extended family of trusted employees.
            </p>
            <p>
              Himalaya, the name itself speaks volumes. Towering
              against all adversities, we have had generations
              contribute to our legacy and we stand proud serving
              others with dedication and profound consistency. We, at
              Himalaya continue to evolve with the changing trends
              inculcating them all as we proceed.
            </p>
            <p>
              Based on solid foundations of our forefathers and with
              unending support from countless people who have placed
              their trust in us, we provide qualitative and trendiest
              eyewear to people. As times change, we are now poised to
              take our endeavour to a different level altogether.
            </p>
            <p>
              It has indeed been a long journey since 1935 when we had
              opened our first store. Now equipped with over 85 stores
              in different locations across the length and the breadth
              of our country, Himalaya is moving from strength to
              strength in more ways than one.
            </p>
            <p>
              I take this opportunity to humbly thank every person who
              has been a part of us. Our company is now synonymous
              with integrity and I pledge to uphold the same passion
              as we continue to evolve further.
            </p>
            <p>
              <i
                >Feel free to get in touch with me at
                corporate@himalayaoptical.com and we promise to
                deliver.</i
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
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
</style>
