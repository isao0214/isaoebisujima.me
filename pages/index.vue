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
    </div>
  </div>
</template>

<script>
import HeaderSp from '~/components/HeaderSp.vue';

export default {
  layout: 'app',
  components: {
    HeaderSp,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
