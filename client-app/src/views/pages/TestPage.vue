<template>
  <v-carousel hide-delimiters style="height: 400px">
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      style="width: 80%"
    >
      <v-container>
        <v-row>
          <v-col
            v-for="(review, reviewIndex) in item.reviews"
            :key="reviewIndex"
            cols="12"
            md="6"
            lg="3"
          >
            <v-card class="pa-3">
              <v-card-title>{{ review.author }}</v-card-title>
              <v-card-text>{{ review.content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          reviews: [
            {
              author: 'John Doe',
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
              author: 'Jane Smith',
              content:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
              author: 'Bob Johnson',
              content:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            },
            {
              author: 'Sara Lee',
              content:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
          ],
        },
        {
          reviews: [
            {
              author: 'Tom Smith',
              content:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            {
              author: 'Karen Johnson',
              content:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
            },
            {
              author: 'Alice Cooper',
              content:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
            },
            {
              author: 'Michael Brown',
              content:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            },
          ],
        },
        {
          reviews: [
            {
              author: 'Mary Smith',
              content:
                'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
            },
            {
              author: 'David Johnson',
              content:
                'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
            },
            {
              author: 'Susan Lee',
              content:
                'Et harum quidem rerum facilis est et expedita distinctio.',
            },
            {
              author: 'Robert Smith',
              content:
                'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
            },
          ],
        },
      ],
    };
  },
};
</script>
