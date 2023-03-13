<template>
  <Header />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />
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
          src="https://www.royacdn.com/unsafe/Site-dcdb68ee-6669-451d-b1bf-d4df1374ba4e/contact_lenses_banner/contactsbanner_contact_lens_care_when_contacts_option.jpg"
        />
      </div>

      <div class="product-list">
        <ContactsCard
          v-for="data in items"
          :key="data._id"
          :data="data"
          @add-to-cart="addToCart"
        ></ContactsCard>
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
  <Footer />
</template>
<script>
import ContactsCard from '../../components/ContactsCard.vue';
import axios from 'axios';
import Footer from '../../components/Common/Footer.vue';
import Header from '../../components/Common/Header.vue';
export default {
  components: {
    ContactsCard,
    Header,
    Footer,
  },
  data() {
    return {
      items: [],
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
          options: ['Litisha', 'KITS', 'Lauren', 'Rain Bain'],
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
  created() {
    this.getProducts();
  },
  methods: {
    toggleAccordion(id) {
      this.activeAccordion = this.activeAccordion === id ? null : id;
    },
    addToCart(product) {
      this.cartItems.push(product);
    },
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/contacts'
        );

        this.items = response.data.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.glasses-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31.3%;
  margin: 20px;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.product-card img {
  width: 100%;
  max-width: 307px;
  height: 153.8px;
  margin-bottom: 10px;
  object-fit: cover;
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
  width: 31.3%;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

/* Media queries */
@media only screen and (max-width: 767px) {
  .sidebar-accordion {
    width: 100%;
    padding: 20px;
    border-right: none;
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
    font-size: 18px;
    padding-right: 10px;
  }

  .accordion-body {
    padding: 20px;
  }
  .product-card {
    width: 100%;
    margin: 20px 0;
  }
  .card-info h2 {
    font-size: 18px;
    margin-top: 10px;
  }

  .glasses-card {
    width: 50%;
    margin: 0 0 20px 0;
    border-radius: 0;
  }
}
@media only screen and (max-width: 1024px) {
  .mainDiv {
    flex-direction: column;
  }
  .sidebar-accordion {
    width: 100%;
    border-right: none;
    padding: 20px;
    margin-bottom: 20px;
  }
  .glasses-card {
    width: 45%;
    margin: 20px 10px;
  }
}

@media only screen and (max-width: 768px) {
  .sidebar-accordion h1 {
    margin-top: 30px;
  }
  .topPhoto img {
    display: none !important;
  }
  .glasses-card {
    width: 100%;
  }
  .sidebar-accordion {
    padding: 10px;
  }
}

@media only screen and (max-width: 480px) {
  .glasses-card {
    width: 100%;
    height: auto;
  }
  .topPhoto img {
    height: auto;
  }
  .product-card img {
    height: auto;
  }
}
</style>
