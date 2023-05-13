<template>
  <Header />
  <div v-if="isLoading" class="loading">
    <i class="fas fa-spinner fa-spin"></i>
    <span>Loading...</span>
  </div>
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
              class="filter"
              v-for="(option, index) in filter.options"
              :key="index"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="selectedFilters[filter.id]"
                @change="getProducts"
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
          style="
            width: 100%;
            box-shadow: 1px 6px 5px -3px rgba(150, 150, 150, 1);
          "
          src="https://marveloptics.com/wp-content/uploads/2019/06/MO_Page_Banner_1.png"
        />
      </div>
      <div class="sorting">
        <label for="brand">Sort by: </label>
        <select v-model="sortOrder" id="brand" @change="getProducts">
          <option value=""></option>
          <option value="price">Price: Low to High</option>
          <option value="-price">Price: High to Low</option>
        </select>
      </div>

      <div class="product-list">
        <GlassCard
          v-for="data in items"
          :key="data._id"
          :data="data"
          @add-to-cart="addToCart"
        ></GlassCard>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import GlassCard from '../../components/GlassCard.vue';
import axios from 'axios';
import Footer from '../../components/Common/Footer.vue';
import Header from '../../components/Common/Header.vue';
export default {
  components: {
    GlassCard,
    Header,
    Footer,
  },
  data() {
    return {
      items: [],
      cartItems: [],
      brands: [],
      brandIds: {},
      isLoading: true,
      activeAccordion: null,
      filters: [
        {
          id: 'type',
          name: 'Type of Glasses',
          options: ['EYEGLASSES', 'SUNGLASSES'],
        },
        {
          id: 'color',
          name: 'Color',
          options: [
            'Beige',
            'Black',
            'Blue',
            'Brown',
            'Crystal',
            'Gold',
            'Grey',
            'Red',
            'Violet',
            'Yellow',
            'Multicolor',
          ],
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
        type: [],
        gender: [],
      },
    };
  },
  created() {
    this.getProducts();
    this.fetchBrands();
  },
  methods: {
    toggleAccordion(id) {
      this.activeAccordion = this.activeAccordion === id ? null : id;
    },
    addToCart(product) {
      this.cartItems.push(product);
    },
    async fetchBrands() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/brands'
        );
        const brands = response.data.data.brands;

        this.brands = brands.map((brand) => brand.name);

        for (const brand of brands) {
          this.brandIds[brand.name] = brand._id;
          console.log(this.brandIds[brand.name]);
        }
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
    async getProducts() {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/eyeGlasses',
          {
            params: {
              color: this.selectedFilters.color,
              type: this.selectedFilters.type,
              brand: this.brandIds[this.selectedFilters.brand],
              gender: this.selectedFilters.gender,
              shape: this.selectedFilters.shape,
              sort: this.sortOrder,
            },
          }
        );
        this.items = response.data.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      this.$nextTick(() => {
        this.$el.querySelector('.mainDiv').classList.add('loaded');
      });
    }, 500);
    axios
      .get('http://localhost:3000/api/v1/brands')
      .then((response) => {
        this.brands = response.data.data.brands.map(
          (brand) => brand.name
        );
        console.log(this.brands);
        const brandFilter = this.filters.find(
          (f) => f.id === 'brand'
        );
        brandFilter.options = this.brands;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style>
.mainDiv {
  display: flex;
}
.sorting {
  text-align: end;
  margin: 10px 20px 0px 0px;
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
.filter {
  display: block;
  margin-bottom: 5px;
}
.accordion-item {
  margin-bottom: 10px;
}
#brand {
  padding: 5px;
  border: solid rgb(191, 191, 191) 1px;
  border-radius: 5px;
  box-shadow: 1px 9px 300px -5px rgba(191, 189, 191, 1);
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
