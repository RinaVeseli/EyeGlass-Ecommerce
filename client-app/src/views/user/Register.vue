<template>
  <Header />
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center mt-2">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <div class="error" v-if="error">{{ error.message }}</div>

            <h2 class="indigo--text">CREATE AN ACCOUNT</h2>
          </div>
          <v-form @submit.prevent="pressed" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="
                  passwordShow ? 'mdi-eye' : 'mdi-eye-off'
                "
                @click:append="passwordShow = !passwordShow"
                required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                :loading="loading"
                @click="saveUser"
                color="indigo"
              >
                <span class="white--text px-8">Create Account</span>
              </v-btn>
            </v-card-actions>
            <h3>
              Already have an account?
              <span><a href="/login">Login</a></span>
            </h3>
          </v-form>
        </v-card>
      </v-col>
    </v-main> </v-app
  ><Footer />
</template>
<script>
import axios from 'axios';
import Footer from '../../components/Common/Footer.vue';
import Header from '../../components/Common/Header.vue';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      loading: false,
      snackbar: false,
      passwordShow: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length >= 6) ||
          'Password must be 6  characters or more!',
      ],
      error: '',
    };
  },
  methods: {
    async saveUser() {
      try {
        await axios.post(
          'http://localhost:3000/api/v1/users/register',
          {
            email: this.email,
            password: this.password,
          }
        );
        console.log(this.role);
        this.email = '';
        this.password = '';
        this.$router.push('/');
      } catch (err) {
        this.error = err;
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.backgruond {
  background-image: url(https://www.shutterstock.com/image-illustration/blue-room-3d-background-260nw-1043622814.jpg) !important;
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
.v-btn {
  height: 40px;
  margin-top: -20px;
  width: 200px;
  background-color: #0071bc;
}
.v-btn span {
  color: white;
}
h3 {
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
}
h3 span {
  color: #0071bc;

  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  margin-bottom: 40px;
}
.indigo--text {
  font-size: 30px;
  font-weight: 20px;
  padding: 30px;
}
.v-col-xxl,
.v-col-xxl-auto,
.v-col-xxl-12,
.v-col-xxl-11,
.v-col-xxl-10,
.v-col-xxl-9,
.v-col-xxl-8,
.v-col-xxl-7,
.v-col-xxl-6,
.v-col-xxl-5,
.v-col-xxl-4,
.v-col-xxl-3,
.v-col-xxl-2,
.v-col-xxl-1,
.v-col-xl,
.v-col-xl-auto,
.v-col-xl-12,
.v-col-xl-11,
.v-col-xl-10,
.v-col-xl-9,
.v-col-xl-8,
.v-col-xl-7,
.v-col-xl-6,
.v-col-xl-5,
.v-col-xl-4,
.v-col-xl-3,
.v-col-xl-2,
.v-col-xl-1,
.v-col-lg,
.v-col-lg-auto,
.v-col-lg-12,
.v-col-lg-11,
.v-col-lg-10,
.v-col-lg-9,
.v-col-lg-8,
.v-col-lg-7,
.v-col-lg-6,
.v-col-lg-5,
.v-col-lg-4,
.v-col-lg-3,
.v-col-lg-2,
.v-col-lg-1,
.v-col-md,
.v-col-md-auto,
.v-col-md-12,
.v-col-md-11,
.v-col-md-10,
.v-col-md-9,
.v-col-md-8,
.v-col-md-7,
.v-col-md-6,
.v-col-md-5,
.v-col-md-4,
.v-col-md-3,
.v-col-md-2,
.v-col-md-1,
.v-col-sm,
.v-col-sm-auto,
.v-col-sm-12,
.v-col-sm-11,
.v-col-sm-10,
.v-col-sm-9,
.v-col-sm-8,
.v-col-sm-7,
.v-col-sm-6,
.v-col-sm-5,
.v-col-sm-4,
.v-col-sm-3,
.v-col-sm-2,
.v-col-sm-1,
.v-col,
.v-col-auto,
.v-col-12,
.v-col-11,
.v-col-10,
.v-col-9,
.v-col-8,
.v-col-7,
.v-col-6,
.v-col-5,
.v-col-4,
.v-col-3,
.v-col-2,
.v-col-1 {
  width: 100%;
  padding: 12px;
  margin-top: 170px;
}
.error {
  color: red;
  font-size: 18px;
}
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}
button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}
</style>
