<template>
  <div>
    <template v-if="isMobile">
      <index-sp/>
    </template>
    <template v-else>
      <index-pc/>
    </template>
  </div>
</template>

<script>
import IndexSp from '~/components/IndexSp.vue';
import IndexPc from '~/components/IndexPc.vue';

export default {
  layout: ({ isMobile }) => isMobile ? 'appSp' : 'appPc',
  components: {
    IndexSp,
    IndexPc,
  },
  asyncData({ isMobile }) {
    return {
      isMobile,
    }
  }
};
</script>
