<template>
  <div>
    <template v-if="isMobile">
      <header-sp/>
      <index-sp/>
      <footer-sp/>
    </template>
    <template v-else>
      <header-pc/>
      <footer-pc/>
    </template>
  </div>
</template>

<script>
import HeaderSp from '~/components/common/HeaderSp.vue';
import HeaderPc from '~/components/common/HeaderPc.vue';
import FooterSp from '~/components/common/FooterSp.vue';
import FooterPc from '~/components/common/FooterPc.vue';
import IndexSp from '~/components/IndexSp.vue';

export default {
  layout: 'app',
  components: {
    HeaderSp,
    HeaderPc,
    FooterSp,
    FooterPc,
    IndexSp,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
