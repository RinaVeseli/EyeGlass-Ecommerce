<template>
  <Header />
  <h1
    style="
      font-size: 40px;
      margin-bottom: 40px;
      color: #0071bc;
      margin-top: 35px;
      margin-left: 15px;
    "
  >
    Shopping Cart
  </h1>
  <v-container>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item._id">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td v-if="item.total">{{ item.total }}€</td>
              <td v-else>{{ item.price * item.quantity }}€</td>
              <td>
                <v-btn
                  @click="decreaseQuantity(item)"
                  color="#1565C0"
                  variant="outlined"
                >
                  -
                </v-btn>
                <v-btn
                  @click="increaseQuantity(item)"
                  class="ml-2"
                  variant="outlined"
                  color="#1565C0"
                >
                  +
                </v-btn>
                <v-btn
                  @click="deleteCartItem(item._id)"
                  class="ml-2"
                  color="#C62828"
                >
                  <v-icon>mdi-delete-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td style="font-weight: bold">Total Order:</td>
              <td>{{ total }}€</td>
              <td>
                <v-btn
                  v-if="total != 0"
                  :disabled="!disableButton"
                  @click="addOrder()"
                >
                  Buy Now!
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  :disabled="disableButton"
                  @click="addOrder()"
                >
                  Buy Now!
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
              </td>
            </tr>
          </tfoot>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Common/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {
      items: [],
      itemTotal: 0,
      eyeglasses: [],
      disableButton: true,
    };
  },
  computed: {
    total() {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.calculateTotal(this.items[i]);
      }
      return sum.toFixed(2);
    },
  },
  created() {
    // Get the current user's shopping cart items
    axios
      .get('http://localhost:3000/api/v1/cart')
      .then((response) => {
        this.items = response.data.data.cartItems;
        console.log(response.data);
        this.items.forEach((item) => {
          this.eyeglasses.push(item.eyeglasses);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    async deleteCartItem(itemId) {
      // Remove the item from the shopping cart
      await axios
        .delete(`http://localhost:3000/api/v1/cart/${itemId}`)
        .then((response) => {
          console.log(response);
          this.items = this.items.filter(
            (item) => item._id !== itemId
          );
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async increaseQuantity(item) {
      item.quantity += 1;
      var itemTotal = item.price * item.quantity;
      item.total = itemTotal.toFixed(2);
      await axios.put(
        `http://localhost:3000/api/v1/cart/${item._id}`,
        { quantity: item.quantity, total: item.total }
      );
    },
    async decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        var itemTotal = item.price * item.quantity;
        item.total = itemTotal.toFixed(2);
        await axios.put(
          `http://localhost:3000/api/v1/cart/${item._id}`,
          { quantity: item.quantity, total: item.total }
        );
      }
    },
    calculateTotal(item) {
      return item.price * item.quantity;
    },
    async addOrder() {
      try {
        await axios
          .post('http://localhost:3000/api/v1/order', {
            cartItems: this.eyeglasses,
            totalPrice: this.total,
          })
          .then((res) => {
            console.log(res);
            if (
              window.confirm(
                'Thank you for your order. Would you like to leave a review?'
              )
            ) {
              this.$router.push({
                name: 'Home',
                params: { showModal: true },
              });
            } else {
              this.$router.push('/');
              alert('Thank you for you order!');
            }
            axios.delete('http://localhost:3000/api/v1/cart');
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
