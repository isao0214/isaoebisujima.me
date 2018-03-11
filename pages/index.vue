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
      <footer-pc/>
    </div>
  </div>
</template>

<script>
import HeaderSp from '~/components/common/HeaderSp.vue';
import HeaderPc from '~/components/common/HeaderPc.vue';
import FooterSp from '~/components/common/FooterSp.vue';
import FooterPc from '~/components/common/FooterPc.vue';

export default {
  layout: 'app',
  components: {
    HeaderSp,
    HeaderPc,
    FooterSp,
    FooterPc,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
