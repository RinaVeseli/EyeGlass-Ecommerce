<template>
    <Header />
    <div class="orders_list">
        <div class="orders_list__img">
            <img :src="logo" alt="Orders Page">
        </div>
        <div class="orders_list__info">
            <div class="orders_list__info__allorders" v-for="order in orders" :key="order._id">
                <h1>Order No.: {{ order._id }}</h1>
                <div class="orders_list__info__allorders__cards">
                    <v-card v-for="item in order.cartItems" :key="item._id" class="mx-auto" width="250" max-width="250">
                        <v-img :src="getImgUrl(item.imageCover)" height="200px" cover></v-img>

                        <v-card-title>
                            {{ item.name }}
                        </v-card-title>

                        <v-card-subtitle>
                            Color: {{ item.color }}
                        </v-card-subtitle>
                        <v-card-subtitle>
                            Frame Size: {{ item.frameSize }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn color="#1565C0" variant="text">
                                Description
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>

                                <v-card-text>
                                    {{ item.description }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>

                </div>
                <h1>Total Price: {{ order.totalPrice }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Common/Header.vue';
import axios from 'axios';
import logo from '../../assets/OrdersPageImg.png'

export default {
    name: 'OrdersList',
    components: {
        Header
    },
    data() {
        return {
            logo: logo,
            show: false,
            orders: []
        }
    },
    created() {
        this.getUserOrders()
    },
    methods: {
        async getUserOrders() {
            await axios.get('http://localhost:3000/api/v1/order')
                .then((res) => {
                    this.orders = res.data.data.orders;
                    console.log(this.orders)
                })
        },
        getImgUrl(pic) {
            return require('@/../../server/public/img/eyeglasses/' + pic)
        }
    }
}
</script>

<style>
.orders_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 533px;
}

.orders_list__img {
    width: 30%;
    height: 100%;
    position: fixed;
    left: 0;
}

.orders_list__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.orders_list__info {
    width: 70%;
    height: 100%;
    position: relative;
    left: 15%;
}

.orders_list__info__allorders {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
    padding: 3%;
    background-color: aliceblue;
}
.orders_list__info__allorders h1{
    text-align: center;
    font-size: 16pt;
    font-weight: bold;
    color: #0D47A1;
}
.orders_list__info__allorders h1:last-child{
    text-align: end;
    margin-top: 10px;
}
.orders_list__info__allorders__cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>