<template>
  <div>
    <h1 class="title">
      portfolioだ
    </h1>
    <div v-if="isMobile">
      <p>app.vueスマートフォン</p>
      <header-sp/>
    </div>
    <div v-else>
      <p>app.vueパソコン</p>
      <header-pc/>
    </div>
  </div>
</template>

<script>
import HeaderSp from '~/components/HeaderSp.vue';
import HeaderPc from '~/components/HeaderPc.vue';

export default {
  layout: 'app',
  components: {
    HeaderSp,
    HeaderPc,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
