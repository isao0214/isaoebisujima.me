<template>
  <div>
    <h1 class="title">
      portfolio
    </h1>
    <div v-if="isMobile">
      <header-sp/>
      <footer-sp/>
    </div>
    <div v-else>
      <header-pc/>
    </div>
  </div>
</template>

<script>
import HeaderSp from '~/components/common/HeaderSp.vue';
import HeaderPc from '~/components/common/HeaderPc.vue';
import FooterSp from '~/components/common/FooterSp.vue';

export default {
  layout: 'app',
  components: {
    HeaderSp,
    HeaderPc,
    FooterSp,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
