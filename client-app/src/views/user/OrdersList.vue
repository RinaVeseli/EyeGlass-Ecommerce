<template>
    <Header />
    <div class="orders_list">
        <div class="orders_list__img">
            <img :src="logo" alt="Orders Page">
        </div>
        <div class="orders_list__info">
            <h1>Orders</h1>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Common/Header.vue';
import logo from '../../assets/OrdersPageImg.png'

export default{
    name: 'OrdersList',
    components: {
        Header
    },
    data(){
        return {
            logo:logo
        }
    }
}
</script>

<style>
    .orders_list{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 533px;
    }
    .orders_list__img{
        width: 30%;
        height: 100%;
    }
    .orders_list__img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .orders_list__info{
        width: 70%;
        height: 100%;
    }
</style>