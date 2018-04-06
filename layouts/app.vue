<template>
  <div id="app">
    <global-header/>
    <nuxt/>
    <global-footer/>
  </div>
</template>

<script>
import GlobalHeader from '~/components/common/Header.vue';
import GlobalFooter from '~/components/common/Footer.vue';

export default {
  name: 'app',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>
