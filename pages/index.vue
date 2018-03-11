<template>
  <div>
    <h1 class="title">
      portfolioだ
    </h1>
    <div v-if="isMobile">
      <p>app.vueスマートフォン</p>
    </div>
    <div v-else>
      <p>app.vueパソコン</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app',
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
