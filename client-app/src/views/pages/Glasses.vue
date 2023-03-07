<template>
  <div class="mainDiv">
    <section class="glasseslist">
      <div class="sidebar-accordion">
        <h1>Filter by:</h1>
        <div
          class="accordion-item"
          v-for="(filter, index) in filters"
          :key="index"
        >
          <div
            class="accordion-header"
            @click="toggleAccordion(filter.id)"
          >
            <span>{{ filter.name }}</span>
            <i
              class="fas fa-chevron-down"
              :class="{ rotate: activeAccordion === filter.id }"
            ></i>
          </div>
          <div
            class="accordion-body"
            :class="{ active: activeAccordion === filter.id }"
          >
            <label
              v-for="(option, index) in filter.options"
              :key="index"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedFilters[filter.id]"
              />
              {{ option }}
            </label>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="topPhoto">
        <img
          style="width: 100%"
          src="https://marveloptics.com/wp-content/uploads/2019/06/MO_Page_Banner_1.png"
        />
      </div>

      <div class="product-list">
        <GlassCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        ></GlassCard>
      </div>
      <div class="cart">
        <h2>Cart</h2>
        <ul>
          <li v-for="product in cartItems" :key="product.id">
            {{ product.name }} - {{ product.price }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import GlassCard from '../../components/GlassCard.vue';

export default {
  data() {
    return {
      components: {
        GlassCard,
      },
      products: [
        {
          id: 1,
          name: 'Product 1',
          photo: 'https://via.placeholder.com/200x150',
          price: '$10.00',
        },
        {
          id: 2,
          name: 'Product 2',
          photo: 'https://via.placeholder.com/200x150',
          price: '$15.00',
        },
        {
          id: 3,
          name: 'Product 3',
          photo: 'https://via.placeholder.com/200x150',
          price: '$20.00',
        },
        {
          id: 3,
          name: 'Product 3',
          photo: 'https://via.placeholder.com/200x150',
          price: '$20.00',
        },
        {
          id: 3,
          name: 'Product 3',
          photo: 'https://via.placeholder.com/200x150',
          price: '$20.00',
        },
        {
          id: 3,
          name: 'Product 3',
          photo: 'https://via.placeholder.com/200x150',
          price: '$20.00',
        },
      ],
      cartItems: [],
      activeAccordion: null,
      filters: [
        {
          id: 'color',
          name: 'Color',
          options: ['Black', 'Brown', 'Silver', 'Gold', 'Red'],
        },
        {
          id: 'shape',
          name: 'Shape',
          options: [
            'Round',
            'Rectangle',
            'Square',
            'Oval',
            'Aviator',
          ],
        },
        {
          id: 'brand',
          name: 'Brand',
          options: ['Ray-Ban', 'Oakley', 'Prada', 'Gucci', 'Versace'],
        },
        {
          id: 'gender',
          name: 'Gender',
          options: ['Men', 'Women', 'Unisex'],
        },
      ],
      selectedFilters: {
        color: [],
        shape: [],
        brand: [],
        gender: [],
      },
    };
  },
  computed: {
    filteredGlasses() {
      return this.glasses.filter((glasses) => {
        return (
          this.selectedFilters.color.includes(glasses.color) &&
          this.selectedFilters.shape.includes(glasses.shape) &&
          this.selectedFilters.brand.includes(glasses.brand) &&
          this.selectedFilters.gender.includes(glasses.gender)
        );
      });
    },
  },

  methods: {
    toggleAccordion(id) {
      this.activeAccordion = this.activeAccordion === id ? null : id;
    },
    addToCart(product) {
      this.cartItems.push(product);
    },
  },
  components: { GlassCard },
};
</script>
<style>
.mainDiv {
  display: flex;
}
.sidebar-accordion {
  width: 300px;
  padding: 50px 20px;
  border-right: 1px solid #ccc;
}
.sidebar-accordion h1 {
  font-size: 26px;
  font-weight: 400;
  margin-bottom: 20px;
}

.accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
}

.accordion-header span {
  font-size: 19px;
  font-weight: bold;
}

.rotate {
  transform: rotate(180deg);
}

.accordion-body {
  padding: 10px;
  display: none;
}

.accordion-body.active {
  display: block;
}

label {
  display: block;
  margin-bottom: 5px;
}

/* The glasseslist */
.glasseslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.glasses-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.glasses-card img {
  width: 400px;
  height: auto;
  margin-bottom: 10px;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card-info h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card-info p {
  font-size: 16px;
  margin-bottom: 20px;
}
.product-list {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product-card {
  width: 350px;
  height: 460px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

/* Media queries */
@media only screen and (max-width: 767px) {
  .sidebar-accordion {
    margin-top: 20px;
    width: 100%;
    padding: 20px;
    border-right: 1px solid #ccc;
  }

  .accordion-item {
    margin-bottom: 20px;
  }

  .accordion-header {
    padding: 10px 20px;
    border-radius: 0;
    border-bottom: none;
    border-top: 1px solid #ccc;
  }

  .accordion-header span {
    font-size: 16px;
  }

  .accordion-body {
    padding: 20px;
  }

  .glasses-card {
    width: 10%;
    margin: 0 0 20px 0;
    border-radius: 0;
  }
}
</style>
