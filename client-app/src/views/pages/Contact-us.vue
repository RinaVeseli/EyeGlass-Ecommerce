<template>
  <section>
    <div class="master-wrap">
      <v-container>
        <div class="page-title"></div>
      </v-container>
    </div>
  </section>
  <section>
    <v-form class="v-form1">
      <h1>contact-us</h1>
      <v-row class="v-row1">
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Enter your name"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="founded"
            label="Contact number"
            persistent-hint
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" class="v-email">
          <v-text-field
            v-model="products"
            label="Enter your email address"
            persistent-hint
            variant="solo"
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
        clearable
        label="Enquiry"
        variant="solo"
      ></v-textarea>
      <div class="btns">
        <v-btn @click="saveProduct" class="submitBtn"> Submit </v-btn>
      </div>
    </v-form>
  </section>
</template>
<script>
export default {
  data: function () {
    return {};
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
</style>
