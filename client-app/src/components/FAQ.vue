<!-- <template>
  <div class="faq_wrapper">
    <h1>Frequently</h1>
    <div class="faq_field_wapper">
      <div class="faq_field" v-for="(faq, i) in faqBase" :key="i">
        <div class="open_faq" v-on:click="closeAllFaq(faq)">
          <h3>
            {{ faq.q }}
            <i
              class="fa-solid fa-plus"
              :class="faq.open ? 'rotate' : ''"
            ></i>
          </h3>
          <p class="invisible" :class="faq.open ? 'visible' : ''">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const faqBase = ref([
      {
        q: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        a: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        open: false,
      },
      {
        q: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        a: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        open: false,
      },
      {
        q: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        a: 'Lorem10 sdfdsfdsfsdfsdfsdfsdfds',
        open: false,
      },
    ]);
    const closeAllFaq = (item) => {
      if (!item.open) {
        faqBase.value.forEach((element) => {
          element.open = false;
        });
        item.open = !item.open;
      }
    };
    return { faqBase, closeAllFaq };
  },
};
</script>

<style scoped>
.faq_wapper {
  text-align: center;
  max-width: 500px;
  margin: 40px auto;
}
.faq_field {
  border: 1px solid purple;
  border-radius: 10px;
  margin: 10px 0;
}
.faq_field_wapper {
  margin-top: 20px;
}
.invisible {
  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.3s, height 0.3s, padding 0.3s, visibility 0.3s;
}
.visible {
  visibility: visible;
  height: 70px;
  opacity: 1;
  padding: 10px 26px;
}
h3 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 18px 24px;
  margin: 8px 0;
}
.open_faq {
  cursor: pointer;
}
.rotate {
  transform: rotate(45deg);
}
.fa_plus {
  transition: transform 0.3s;
}
</style> -->
<template>
  <div
    :class="open ? 'faq open' : 'faq'"
    @click="$emit('toggleOpen', index)"
  >
    <div class="question">{{ faq.question }}</div>
    <div class="answer">{{ faq.answer }}</div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  props: ['faq', 'index', 'open'],
};
</script>
