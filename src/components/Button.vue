<template>
  <div class="button" @click="changeCount">button {{ count }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const count = ref(0);
    const changeCount = () => count.value++;
    return {
      count,
      changeCount
    };
  }
});
</script>

<style lang='less' scoped>
</style>
