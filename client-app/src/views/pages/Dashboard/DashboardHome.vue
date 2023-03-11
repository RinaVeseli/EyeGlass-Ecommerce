<template>
  <div class="con">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="colsCard">
      <v-container class="Container">
        <v-row>
          <v-col sm="4" md="4">
            <v-card color="#1F7087" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    <i class="fa-solid fa-users"></i> 5
                  </v-card-title>

                  <v-card-subtitle>User</v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      See All Users
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://icons.veryicon.com/png/o/miscellaneous/905-system/customer-management-4.png"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <v-col sm="5" md="4">
            <v-card color="#1F7087" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5"> 7 </v-card-title>

                  <v-card-subtitle>Contacts</v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      See All Contacts
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn-icons-png.flaticon.com/512/2789/2789428.png"
                  ></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>

          <v-col sm="4" md="4">
            <v-card color="#952175" theme="dark">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="text-h5">
                    <i class="fa-solid fa-glasses"></i> 9
                  </v-card-title>

                  <v-card-subtitle>EyeGlasses</v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                    >
                      See All EyeGlasses
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn-icons-png.flaticon.com/512/4312/4312129.png"
                  >
                  </v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <!-- <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:item.glutenfree="{ item }">
        <v-simple-checkbox
          v-model="item.glutenfree"
          disabled
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </div> -->
</template>
<script>
import Sidebar from './Sidebar.vue';
export default {
  name: 'recursive-menu',
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          glutenfree: true,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          glutenfree: false,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          glutenfree: false,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          glutenfree: true,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          glutenfree: true,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          glutenfree: false,
        },
      ],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'Gluten-Free', value: 'glutenfree' },
      ],
    };
  },
  components: {
    Sidebar,
  },
};
</script>
<style>
.con {
  display: flex;
  justify-content: space-evenly;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.colsCard {
  width: 100%;
  float: center;

  margin-top: 50px;
}
.cardsContainer {
  gap: 40px;
}
.v-row {
  float: center;
  margin-left: 50px;
}
.img {
  background: none;
}
@media only screen and (max-width: 768px) {
  .con {
    flex-direction: column;
  }
  .sidebar {
    order: 2;
  }
  .colsCard {
    order: 1;
    margin-top: 0;
  }
}
</style>
