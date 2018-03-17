<template>
  <div id="app">
    <header-sp/>
    <nuxt/>
    <footer-sp/>
  </div>
</template>

<script>
import FooterSp from '~/components/common/FooterSp.vue';
import HeaderSp from '~/components/common/HeaderSp.vue';

export default {
  name: 'app',
  components: {
    HeaderSp,
    FooterSp,
  },
};
</script>
