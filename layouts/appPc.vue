<template>
  <div id="app">
    <header-pc/>
    <nuxt/>
    <footer-pc/>
  </div>
</template>

<script>
import HeaderPc from '~/components/common/HeaderPc.vue';
import FooterPc from '~/components/common/FooterPc.vue';

export default {
  name: 'app',
  components: {
    HeaderPc,
    FooterPc,
  },
};
</script>
