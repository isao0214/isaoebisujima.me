<template>
  <div id="app">
    <header/>
    <nuxt/>
    <footer/>
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>
